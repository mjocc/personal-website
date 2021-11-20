import { getPlaiceholder } from 'plaiceholder';

export async function getPlaceholder(imagePath) {
  return await getPlaiceholder(imagePath);
}

// imagePaths is an Array of image paths
// e.g.  ['/images/header-background.jpg']
export async function getPlaceholders(imagePaths) {
  const placeholders = {};
  for (const imagePath of imagePaths) {
    let placeholder = await getPlaiceholder(imagePath);
    placeholders[imagePath] = placeholder;
  }
  return placeholders;
}