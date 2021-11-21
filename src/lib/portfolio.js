import { getDataFromFile, getDataFromDir, getSlugsFromDir } from './content';
import { getPlaceholder } from './placeholder';
import { cwd } from 'process';
import { join } from 'path';
import dateFormat from 'dateformat';

const transformationFunction = async (file) => {
  file.data.date = dateFormat(file.data.date, 'mmmm, yyyy');
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
