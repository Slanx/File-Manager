import { readdir, mkdir, stat } from 'fs/promises';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { validatePath } from '../explorer/index.js';

export const copy = async (pathToFiles, pathToFilesCopy) => {
  try {
    const isFile = (await stat(pathToFiles)).isFile();

    await validatePath(pathToFilesCopy, true);
    console.log(pathToFilesCopy);
    const fileName = path.basename(pathToFiles);
    const pathToDesition = path.join(pathToFilesCopy, fileName);

    if (isFile) {
      copyFile(pathToFiles, pathToDesition);
    } else {
      const files = await readdir(pathToFiles, { withFileTypes: true });

      await mkdir(pathToDesition, { recursive: true });

      for await (const file of files) {
        const pathToFile = path.join(pathToFiles, file.name);
        await copy(pathToFile, pathToDesition);
      }
    }
  } catch (e) {
    console.error('Operation failed');
  }
};

export const copyFile = (pathToFile, pathToFileCopy) => {
  try {
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(pathToFileCopy, { flags: 'a' });

    readStream.pipe(writeStream);
  } catch (e) {
    console.error('Operation failed');
  }
};
