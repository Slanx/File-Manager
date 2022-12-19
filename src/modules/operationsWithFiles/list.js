import { readdir } from 'fs/promises';
import { currentPath } from '../explorer/index.js';

export const list = async () => {
  try {
    const files = await readdir(currentPath, { withFileTypes: true });
    const filesList = files.map((file) => {
      let typeFile = '';
      if (file.isFile()) {
        typeFile = 'File';
      } else if (file.isDirectory()) {
        typeFile = 'Directory';
      } else {
        typeFile = 'Unknown';
      }

      return {
        name: file.name,
        type: typeFile,
      };
    });
    const sortedFilesList = filesList.sort(function (a, b) {
      if (a.type < b.type) return -1;
      if (a.type > b.type) return 1;
      if (a.name < b.name) return -1;
      if (a.name > b.type) return 1;
      return 0;
    });
    console.table(sortedFilesList);
  } catch (e) {
    console.error('Operation failed');
  }
};
