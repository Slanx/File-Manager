import { currentPathUpdate, currentPath } from './currentPath.js';
import path from 'path';

export const moveToUpDirectory = async () => {
  const pathToUpDirectory = path.join(currentPath, '..');
  currentPathUpdate(path.normalize(pathToUpDirectory));
};
