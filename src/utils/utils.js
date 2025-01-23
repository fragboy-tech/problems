import fs from "fs";

const log = (message) => {
  console.log(`************${message}************`);
};

const readJSONFile = (fileName) => {
  return JSON.parse(fs.readFileSync(`./data/${fileName}.json`));
};

const writeJSONFile = (fileName) => {
  fs.writeFileSync("./data/movies.json", JSON.stringify(fileName));
};

export { log, readJSONFile, writeJSONFile };
