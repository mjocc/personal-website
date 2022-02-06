import {
  getDataFromDir,
  getDataFromFile,
  getSlugsFromDir,
  sharedValidationSchema,
  TransformationFunction
} from '@lib/content';
import { getPlaceholder } from '@lib/placeholder';
import { join } from 'path';
import { cwd } from 'process';
import { z } from 'zod';

const portfolioFrontMatterSchema = z.object({
  url: z.string(),
  img: z.string(),
  summary: z.string(),
  placeholder: z.any(),
});
const frontMatterSchema = sharedValidationSchema.merge(
  portfolioFrontMatterSchema
);
type PortfolioFrontMatter = z.infer<typeof frontMatterSchema>;

const transformationFunction: TransformationFunction<
  PortfolioFrontMatter
> = async (file) => {
  file.data.placeholder = await getPlaceholder(file.data.img);
};

export const getPortfolioItems = async () => {
  const portfolioDirectory = join(cwd(), 'content/portfolio');
  return await getDataFromDir<PortfolioFrontMatter>(
    portfolioDirectory,
    frontMatterSchema,
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
    frontMatterSchema,
    transformationFunction
  );
};
