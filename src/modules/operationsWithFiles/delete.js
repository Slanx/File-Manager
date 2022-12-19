import { rm } from 'fs/promises';

export const remove = async (pathToFile) => {
  try {
    await rm(pathToFile, { recursive: true });
  } catch (e) {
    console.error('Operation failed');
  }
};
