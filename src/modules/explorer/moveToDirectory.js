import { validatePath } from './validatePath.js';
import { currentPathUpdate } from './currentPath.js';
import { normalize } from 'path';

export const moveToDirectory = async (pathToFile) => {
  try {
    await validatePath(pathToFile, true);

    currentPathUpdate(normalize(pathToFile));
  } catch (e) {
    console.error('Operation failed');
  }
};
