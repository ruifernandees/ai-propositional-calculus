const readlineSync = require('readline-sync');

const { readFileInDatabase } = require('./helpers/readFileInDatabase');
const { factsParser } = require('./parsers/factsParser');
const { rulesParser } = require('./parsers/rulesParser');
const { backchaining, forwardChaining, hybridChaining } = require('./inference-engine');

const [,, database, target] = process.argv;

const options = [
  backchaining,
  forwardChaining,
  hybridChaining,
];

const chainingOptionsLabels = ['Encadeamento para trás', 'Encadeamento para frente', 'Encadeamento misto'];

function main() {
  const index = readlineSync.keyInSelect(chainingOptionsLabels, 'Qual encadeamento?');
  if (index === -1) return;
  const rawFacts = readFileInDatabase('facts.txt', database);
  const facts = factsParser(rawFacts);
  const rawRules = readFileInDatabase('rules.txt', database);
  const rules = rulesParser(rawRules);
  const result = options[index](facts, rules, target);
  console.log(result);
}

main();
