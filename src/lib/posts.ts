import { join } from 'path';
import { cwd } from 'process';
import {
  getDataFromDir,
  getDataFromFile,
  getSlugsFromDir
} from '@lib/content';
import { z } from 'zod';


const postFrontMatterSchema = z.object({

})
type PostFrontMatter = z.infer<typeof postFrontMatterSchema>

export const getPosts = async () => {
  const portfolioDirectory = join(cwd(), 'content/posts');
  return await getDataFromDir<PostFrontMatter>(portfolioDirectory);
};

export const getPostSlugs = async () => {
  const portfolioDirectory = join(cwd(), 'content/posts');
  return await getSlugsFromDir(portfolioDirectory);
};

export const getPost = async (slug: string) => {
  const portfolioDirectory = join(cwd(), 'content/posts');
  return await getDataFromFile<PostFrontMatter>(
    portfolioDirectory,
    `${slug}.md`
  );
};
