import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream';
import { validatePath } from '../explorer/index.js';

export const compress = async (pathToFile, pathToCompressFile) => {
  try {
    await validatePath(pathToFile, false);
    const compressBrotli = createBrotliCompress();
    const source = createReadStream(pathToFile);
    const destination = createWriteStream(pathToCompressFile);
    pipeline(source, compressBrotli, destination, (err) => {
      if (err) {
        throw err;
      }
    });
  } catch (e) {
    console.error('Operation failed');
  }
};
