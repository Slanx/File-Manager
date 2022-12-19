import { stat } from 'fs/promises';

export const validatePath = async (pathToFile, isDirectory) => {
  const pathExsist = (await stat(pathToFile)).isFile();

  if ((pathExsist && isDirectory) || (!pathExsist && !isDirectory)) {
    throw new Error('Operation failed');
  }
};
