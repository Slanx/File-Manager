import readline from 'readline';
import {
  currentPath,
  moveToUpDirectory,
  moveToDirectory,
  getPath,
} from './modules/explorer/index.js';
import { getOsInfo } from './modules/operationsWithSystem/operationsWithSystem.js';
import {
  read,
  create,
  copy,
  list,
  remove,
  move,
  rename,
  calculateHash,
  compress,
  decompress,
} from './modules/operationsWithFiles/index.js';
import { exit } from 'process';

const parseArgs = (symbolsToParse) => {
  const argument = process.argv[2];

  if (argument.indexOf(symbolsToParse) !== -1) {
    const username = argument.split('=')[1];
    return username;
  } else {
    throw new Error('Please enter correct username');
  }
};

const username = parseArgs('--username');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const commands = {
  ls: list.bind(null, currentPath),
  cd: moveToDirectory,
  up: moveToUpDirectory,
  os: getOsInfo,
  cat: read,
  cp: copy,
  add: create,
  mv: move,
  rm: remove,
  rn: rename,
  hash: calculateHash,
  compress: compress,
  decompress: decompress,
};

rl.write(`Welcome to the File Manager, ${username}!\n\n`);
rl.write(`You are currently in ${currentPath}\n\n`);

rl.on('line', async (commandLine, error) => {
  try {
    if (error) throw error;

    if (commandLine === '.exit') {
      rl.close();
    } else {
      const command = commandLine.split(' ')[0];
      const cmdArgs = commandLine.slice(command.length + 1).split(' ');

      if (cmdArgs.length > 2) {
        throw new Error('\nInvalid input\n');
      }

      const pathArgs = cmdArgs.map((item) => getPath(item));

      try {
        if (command === 'os') {
          await commands[command](...cmdArgs);
        } else {
          await commands[command](...pathArgs);
        }
        console.log(`\nYou are currently in ${currentPath}\n`);
      } catch (e) {
        throw new Error('\nInvalid input\n');
      }
    }
  } catch (e) {
    console.error(e.message);
  }
});

rl.on('SIGNINT', () => {
  rl.close();
});

rl.on('close', (error) => {
  console.log(`\nThank you for using File Manager,${username}!`);
  if (error) throw error;
});
