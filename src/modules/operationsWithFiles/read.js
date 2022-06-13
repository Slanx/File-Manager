import { createReadStream } from 'fs';
import { validatePath } from '../explorer/index.js';

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
