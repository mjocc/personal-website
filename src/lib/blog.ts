import {
  FileData,
  getDataFromDir,
  getDataFromFile,
  getSlugsFromDir,
  sharedValidationSchema,
} from '@lib/content';
import { join } from 'path';
import { cwd } from 'process';
import { z } from 'zod';

const postFrontMatterSchema = z.object({});
const frontMatterSchema = sharedValidationSchema.merge(postFrontMatterSchema);
type PostFrontMatter = z.infer<typeof frontMatterSchema>;

export const getPosts = async () => {
  const portfolioDirectory = join(cwd(), 'content/posts');
  return await getDataFromDir<PostFrontMatter>(
    portfolioDirectory,
    frontMatterSchema
  );
};

export const getPostSlugs = async () => {
  const portfolioDirectory = join(cwd(), 'content/posts');
  return await getSlugsFromDir(portfolioDirectory);
};

export const getPost = async (slug: string) => {
  const portfolioDirectory = join(cwd(), 'content/posts');
  return await getDataFromFile<PostFrontMatter>(
    portfolioDirectory,
    `${slug}.md`,
    frontMatterSchema
  );
};

export type BlogPost = FileData<PostFrontMatter>;
