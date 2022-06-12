import os from 'os';

let currentPath = os.homedir();

const currentPathUpdate = (newPath) => {
  currentPath = newPath;
};

export { currentPath, currentPathUpdate };
