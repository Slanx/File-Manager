import { rename as renameFile } from 'fs/promises';
import { validatePath } from '../explorer/index.js';

export const rename = async (pathToFile, pathToFileRename) => {
  try {
    await validatePath(pathToFile);

    renameFile(pathToFile, pathToFileRename);
  } catch (e) {
    console.error('Operation failed');
  }
};
