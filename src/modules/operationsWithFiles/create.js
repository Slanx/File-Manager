import { writeFile } from 'fs/promises';

export const create = async (pathToFile) => {
  try {
    await writeFile(pathToFile, '', { flag: 'wx' });
  } catch (err) {
    console.error('Operation failed');
  }
};
