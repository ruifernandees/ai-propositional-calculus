const { forwardChainingThatReturnsFacts } = require('./forwardChaining');

function forwardChaining(facts, rules, target) {
  return forwardChainingThatReturnsFacts(facts, rules)[target];
}

module.exports = { forwardChaining };
