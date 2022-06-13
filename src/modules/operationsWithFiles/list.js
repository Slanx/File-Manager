import { readdir } from 'fs/promises';
import { currentPath } from '../explorer/index.js';

export const list = async () => {
  try {
    const files = await readdir(currentPath);
    console.log(files);
  } catch (e) {
    console.error('Operation failed');
  }
};
