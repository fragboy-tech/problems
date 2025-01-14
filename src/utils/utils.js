import fs from "fs";

const log = (message) => {
  console.log(`************${message}************`);
};

const readJSONFile = (fileName) => {
  return JSON.parse(fs.readFileSync(`./data/${fileName}.json`));
};

export { log, readJSONFile };
