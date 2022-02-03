import { join } from 'path';
import { IGetPlaiceholderReturn } from 'plaiceholder';
import { cwd } from 'process';
import {
  FileData,
  getDataFromDir,
  getDataFromFile,
  getSlugsFromDir,
  TransformationFunction,
} from '@lib/content';
import { getPlaceholder } from '@lib/placeholder';

interface PortfolioFrontMatter {
  url: string;
  img: string;
  summary: string;
  placeholder?: IGetPlaiceholderReturn;
}

const transformationFunction: TransformationFunction<
  PortfolioFrontMatter
> = async (file) => {
  file.data.placeholder = await getPlaceholder(file.data.img);
};

export const getPortfolioItems = async () => {
  const portfolioDirectory = join(cwd(), 'content/portfolio');
  return await getDataFromDir<PortfolioFrontMatter>(
    portfolioDirectory,
    transformationFunction
  );
};

export const getPortfolioSlugs = async () => {
  const portfolioDirectory = join(cwd(), 'content/portfolio');
  return await getSlugsFromDir(portfolioDirectory);
};

export const getPortfolioItem = async (slug: string) => {
  const portfolioDirectory = join(cwd(), 'content/portfolio');
  return await getDataFromFile<PortfolioFrontMatter>(
    portfolioDirectory,
    `${slug}.md`,
    transformationFunction
  );
};
