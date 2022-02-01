import { join } from 'path';
import { cwd } from 'process';
import { getDataFromDir, getDataFromFile, getSlugsFromDir } from './content';
import { getPlaceholder } from './placeholder';

const transformationFunction = async (file) => {
  file.data.date = new Date(file.data.date).getTime();
  file.data.placeholder = await getPlaceholder(file.data.img);
};

export const getPortfolioItems = async () => {
  const portfolioDirectory = join(cwd(), 'content/portfolio');
  return await getDataFromDir(portfolioDirectory, transformationFunction);
};

export const getPortfolioSlugs = async () => {
  const portfolioDirectory = join(cwd(), 'content/portfolio');
  return await getSlugsFromDir(portfolioDirectory);
};

export const getPortfolioItem = async (slug) => {
  const portfolioDirectory = join(cwd(), 'content/portfolio');
  return await getDataFromFile(
    portfolioDirectory,
    `${slug}.md`,
    transformationFunction
  );
};
