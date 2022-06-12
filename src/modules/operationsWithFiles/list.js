import { readdir } from 'fs/promises';

export const list = async (pathToFiles) => {
  try {
    const files = await readdir(pathToFiles);
    console.log(files);
  } catch (e) {
    console.error('Operation failed');
  }
};
