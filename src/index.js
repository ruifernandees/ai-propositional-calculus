const { readFileInDatabase } = require('./helpers/readFileInDatabase');
const { factsParser } = require('./parsers/factsParser');
const { rulesParser } = require('./parsers/rulesParser');

const [,, database] = process.argv;

const facts = readFileInDatabase('facts.txt', database);
console.log(factsParser(facts));
const rules = readFileInDatabase('rules.txt', database);
console.log(JSON.stringify(rulesParser(rules)));
