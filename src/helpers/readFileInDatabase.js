const fs = require('fs');
const { resolveDatabasePath } = require('./resolveDatabasePath');

function readFileInDatabase(fileName, database) {
  const file = fs.readFileSync(`${resolveDatabasePath(database)}/${fileName}`);
  return file.toString();
}

module.exports = { readFileInDatabase };
