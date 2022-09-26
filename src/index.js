const fs = require('fs');
const path = require('path');

const { factsParser } = require('./parsers/factsParser');
const { rulesParser } = require('./parsers/rulesParser');

const DEFAULT_BASE_DATABASE_PATH = path.resolve(__dirname, 'database');

const databases = {
  i: 'knowledge-i',
  ii: 'knowledge-ii',
};

const [,, database] = process.argv;

const facts = fs.readFileSync(`${DEFAULT_BASE_DATABASE_PATH}/${databases[database]}/facts.txt`);
console.log(factsParser(facts.toString()));
const rules = fs.readFileSync(`${DEFAULT_BASE_DATABASE_PATH}/${databases[database]}/rules.txt`);
console.log(JSON.stringify(rulesParser(rules.toString())));
