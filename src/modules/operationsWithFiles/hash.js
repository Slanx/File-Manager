import { createReadStream } from 'fs';
import { stdout } from 'process';
const { createHash } = await import('crypto');
import { validatePath } from '../explorer/index.js';

export const calculateHash = async (pathToFile) => {
  try {
    await validatePath(pathToFile, false);

    const hash = createHash('sha256');
    const source = createReadStream(pathToFile);

    for await (const chunk of source) {
      hash.update(chunk);
      console.log(hash.digest('hex'));
    }
    console.log(hash.digest('hex'));
  } catch (e) {
    console.error('Operation failed');
  }
};
