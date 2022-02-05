import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';
import hljs from 'highlight.js';
import orderBy from 'lodash/orderBy';
import { marked } from 'marked';
import { join } from 'path';
import { z, AnyZodObject } from 'zod';
import memoize from 'lodash/memoize';

type MatterFile = matter.GrayMatterFile<string>;

export const sharedValidationSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string(),
  date: z.union([
    z.date().transform((date) => new Date(date).getTime()),
    z.number(),
  ]),
});
type SharedFrontMatterType = z.infer<typeof sharedValidationSchema>;

interface FileData<FrontMatterType> extends Omit<MatterFile, 'orig'> {
  data: FrontMatterType;
  orig?: MatterFile['orig'];
}

export type TransformationFunction<FrontMatterType> = (
  file: FileData<FrontMatterType>
) => void;

export const getFileNames = memoize(async (directory: string) => {
  const portfolioFiles = await readdir(directory);
  return portfolioFiles;
});

export const getDataFromFile = memoize(
  async <FrontMatterType extends SharedFrontMatterType>(
    directory: string,
    fileName: string,
    frontMatterSchema: AnyZodObject,
    transformationFunction?: TransformationFunction<FrontMatterType>
  ) => {
    let filePath = join(directory, fileName);
    let fileContents = await readFile(filePath, 'utf8');
    let fileData = matter(fileContents) as FileData<FrontMatterType>;

    const validatedFrontMatterData = (await frontMatterSchema.parseAsync(
      fileData.data
    )) as FrontMatterType;
    fileData.data = validatedFrontMatterData;

    fileData.content = marked.parse(fileData.content, {
      gfm: true,
      highlight(code) {
        return hljs.highlightAuto(code).value;
      },
    });

    delete fileData.orig;

    if (transformationFunction) {
      await transformationFunction(fileData);
    }

    // Validate slug string matches file name
    let slug = fileName.replace(/\.md$/, '');
    if (fileData.data.slug !== slug) {
      throw new Error(
        `slug field doesn\'t match with the path of its content source (${slug})`
      );
    } else {
      return fileData;
    }
  },
  (directory, fileName) => `${directory}/${fileName}`
);

export const getDataFromDir = memoize(
  async <FrontMatterType extends SharedFrontMatterType>(
    directory: string,
    frontMatterSchema: AnyZodObject,
    transformationFunction?: TransformationFunction<FrontMatterType>
  ) => {
    const fileNames = await getFileNames(directory);
    const fileData: FileData<FrontMatterType>[] = [];
    for (const fileName of fileNames) {
      let data: FileData<FrontMatterType> = await getDataFromFile(
        directory,
        fileName,
        frontMatterSchema,
        transformationFunction
      );
      fileData.push(data);
    }
    const orderedFileData = orderBy(
      fileData,
      ['data.date', 'data.title'],
      ['desc', 'desc']
    );
    return orderedFileData;
  }
);

export type PathObject = { slug: string };
export type PathParamObject = { params: PathObject };

export const getSlugsFromDir = async (directory: string) => {
  let fileNames = await getFileNames(directory);
  let slugs = fileNames.map((fileName) => {
    return fileName.replace(/\.md$/, '');
  });
  let paths: PathParamObject[] = [];
  for (const slug of slugs) {
    paths.push({ params: { slug } });
  }
  return paths;
};

export type ContentPropsType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>;
