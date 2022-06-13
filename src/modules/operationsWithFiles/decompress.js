import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream';
import { validatePath } from '../explorer/index.js';

export const decompress = async (pathToDecompressFile, pathToFile) => {
  try {
    await validatePath(pathToDecompressFile, false);
    const decompressBrotli = createBrotliDecompress();
    const source = createReadStream(pathToDecompressFile);
    const destination = createWriteStream(pathToFile);
    pipeline(source, decompressBrotli, destination, (err) => {
      if (err) {
        throw err;
      }
    });
  } catch (e) {
    console.error('Operation failed');
  }
};
