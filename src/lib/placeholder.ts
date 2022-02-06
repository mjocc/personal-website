import { getPlaiceholder, IGetPlaiceholderReturn } from 'plaiceholder';

export const getPlaceholder = async (imagePath: string) =>
  await getPlaiceholder(imagePath);

export const getPlaceholders = async (imagePaths: string[]) => {
  const placeholders: { [key: string]: IGetPlaiceholderReturn } = {};
  for (const imagePath of imagePaths) {
    let placeholder = await getPlaiceholder(imagePath);
    placeholders[imagePath] = placeholder;
  }
  return placeholders;
};
