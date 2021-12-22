import * as matter from 'gray-matter';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { marked } from 'marked';
import hljs from 'highlight.js';
import orderBy from 'lodash/orderBy';

export const getFileNames = async (directory) => {
  const portfolioFiles = await readdir(directory);
  return portfolioFiles;
};

export const getDataFromFile = async (
  directory,
  fileName,
  transformationFunction
) => {
  let filePath = join(directory, fileName);
  let fileContents = await readFile(filePath, 'utf8');
  let fileData = matter(fileContents);
  fileData.content = marked.parse(fileData.content, {
    gfm: true,
    highlight(code) {
      return hljs.highlightAuto(code).value;
    },
  });
  delete fileData.orig;
  if (typeof transformationFunction === 'function') {
    await transformationFunction(fileData);
  }

  // Validate slug string
  let slug = fileName.replace(/\.md$/, '');
  if (fileData.data.slug !== slug) {
    throw new Error(
      `slug field doesn\'t match with the path of its content source (${slug})`
    );
  } else {
    return fileData;
  }
};

export const getDataFromDir = async (directory, transformationFunction) => {
  const fileNames = await getFileNames(directory);
  const fileData = [];
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

export const getSlugsFromDir = async (directory) => {
  let fileNames = await getFileNames(directory);
  let slugs = fileNames.map((fileName) => {
    return fileName.replace(/\.md$/, '');
  });
  let paths = [];
  for (const slug of slugs) {
    paths.push({ params: { slug } });
  }
  return paths;
};
