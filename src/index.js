const { readFileInDatabase } = require('./helpers/readFileInDatabase');
const { factsParser } = require('./parsers/factsParser');
const { rulesParser } = require('./parsers/rulesParser');
const { backchaining } = require('./inference-engine/backchaining');

const [,, database, target] = process.argv;

const rawFacts = readFileInDatabase('facts.txt', database);
const facts = factsParser(rawFacts);
// console.log();
const rawRules = readFileInDatabase('rules.txt', database);
const rules = rulesParser(rawRules);
// console.log(JSON.stringify(rulesParser(rules)[0]));

console.log(backchaining(facts, rules, target));
