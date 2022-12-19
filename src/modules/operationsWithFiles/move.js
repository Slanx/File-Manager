import { copy } from './copy.js';
import { remove } from './delete.js';

export const move = async (pathToFiles, pathToFilesMove) => {
  await copy(pathToFiles, pathToFilesMove);
  await remove(pathToFiles);
};
