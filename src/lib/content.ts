import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';
import hljs from 'highlight.js';
import orderBy from 'lodash/orderBy';
import { marked } from 'marked';
import { join } from 'path';
import { z, AnyZodObject } from 'zod';

type MatterFile = matter.GrayMatterFile<string>;

const sharedFrontMatterSchema = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.string().transform((dateStr: string) => new Date(dateStr).getTime()),
})
type SharedFrontMatter = z.input<typeof sharedFrontMatterSchema>;
type ValidatedSharedFrontMatter = z.infer<typeof sharedFrontMatterSchema>;

interface BaseFrontMatter {
  [key: string]: any;
}

export interface FileData<FrontMatterType extends BaseFrontMatter>
  extends Omit<MatterFile, 'orig'> {
  data: FrontMatterType & SharedFrontMatter;
  orig?: MatterFile['orig'];
}

export type TransformationFunction<FrontMatterType> = (
  file: FileData<FrontMatterType>
) => void;

export const getFileNames = async (directory: string) => {
  const portfolioFiles = await readdir(directory);
  return portfolioFiles;
};

export const getDataFromFile = async <FrontMatterType extends BaseFrontMatter>(
  directory: string,
  fileName: string,
  extraValidationSchema: AnyZodObject, // TODO: Add type here
  transformationFunction?: TransformationFunction<FrontMatterType>
) => {
  let filePath = join(directory, fileName);
  let fileContents = await readFile(filePath, 'utf8');
  // TODO: remove this as (and any others in the project) and replace with type validation
  let fileData = matter(fileContents) as FileData<FrontMatterType>;
  fileData.content = marked.parse(fileData.content, {
    gfm: true,
    highlight(code) {
      return hljs.highlightAuto(code).value;
    },
  });

  delete fileData.orig;
  const validationSchema = sharedFrontMatterSchema.merge(extraValidationSchema)
  const validatedFileData =
    validationSchema.parse(fileData);
  if (transformationFunction) {
    await transformationFunction(validatedFileData);
  }

  // Validate slug string matches file name
  let slug = fileName.replace(/\.md$/, '');
  if (validatedFileData.data.slug !== slug) {
    throw new Error(
      `slug field doesn\'t match with the path of its content source (${slug})`
    );
  } else {
    return validatedFileData;
  }
};

export const getDataFromDir = async <FrontMatterType extends BaseFrontMatter>(
  directory: string,
  transformationFunction?: TransformationFunction<FrontMatterType>
) => {
  const fileNames = await getFileNames(directory);
  const fileData: FileData<FrontMatterType>[] = [];
  for (const fileName of fileNames) {
    let data = await getDataFromFile(
      directory,
      fileName,
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
};

interface PathParamObject {
  params: { slug: string };
}

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
