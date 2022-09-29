const { backchaining } = require('../backchaining');
const { forwardChainingThatReturnsFacts } = require('../forwardChaining/forwardChaining');

function hybridChaining(facts, rules, target) {
  if (facts[target]) return facts[target];
  const newFacts = forwardChainingThatReturnsFacts(facts, rules);
  if (newFacts[target]) return newFacts[target];
  return backchaining(newFacts, rules, target);
}

module.exports = { hybridChaining };
