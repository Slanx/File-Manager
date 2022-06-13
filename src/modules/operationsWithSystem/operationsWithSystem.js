import os from 'os';

const getEOL = () => {
  return JSON.stringify(os.EOL);
};

const getUsername = () => {
  return os.userInfo().username;
};

const commandsOfOs = {
  EOL: getEOL,
  cpus: () => os.cpus(),
  homedir: os.homedir,
  username: getUsername,
  architecture: os.arch,
};

export const getOsInfo = (flag) => {
  const osFunction = flag.slice(2);

  console.log(commandsOfOs[osFunction]());
};
