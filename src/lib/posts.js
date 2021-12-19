import { getDataFromFile, getDataFromDir, getSlugsFromDir } from './content';
import { cwd } from 'process';
import { join } from 'path';

const transformationFunction = async (file) => {
  file.data.date = new Date(file.data.date).getTime();
};

export const getPosts = async () => {
  const portfolioDirectory = join(cwd(), 'content/posts');
  return await getDataFromDir(portfolioDirectory, transformationFunction);
};

export const getPostSlugs = async () => {
  const portfolioDirectory = join(cwd(), 'content/posts');
  return await getSlugsFromDir(portfolioDirectory);
};

export const getPost = async (slug) => {
  const portfolioDirectory = join(cwd(), 'content/posts');
  return await getDataFromFile(
    portfolioDirectory,
    `${slug}.md`,
    transformationFunction
  );
};
