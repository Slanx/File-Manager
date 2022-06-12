import { currentPathUpdate, currentPath } from './currentPath.js';
import { normalize } from 'path';

export const moveToUpDirectory = async () => {
  const pathToUpDirectory = path.join(currentPath, '..');
  currentPathUpdate(normalize(pathToUpDirectory));
};
