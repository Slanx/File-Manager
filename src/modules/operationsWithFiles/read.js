import { createReadStream } from 'fs';
import { validatePath } from '../explorer/index.js';
import { pipeline } from 'stream/promises';
import { EOL } from 'os';
import { stdout } from 'process';

export const read = async (pathToFile) => {
  try {
    await validatePath(pathToFile, false);

    const readStream = createReadStream(pathToFile, 'utf-8');

    for await (const chunk of readStream) {
      console.log(chunk);
    }
  } catch (e) {
    console.error('Operation failed');
  }
};
