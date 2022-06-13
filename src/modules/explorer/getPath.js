import path from 'path';
import { currentPath } from './currentPath.js';

export const getPath = (pathToFile) => {
  try {
    const isAbsolute = path.isAbsolute(pathToFile);
    let pathToDesition = '';

    if (isAbsolute) {
      pathToDesition = pathToFile;
    } else {
      pathToDesition = path.join(currentPath, pathToFile);
    }

    return pathToDesition;
  } catch (e) {
    throw new Error('Operation failed');
  }
};
