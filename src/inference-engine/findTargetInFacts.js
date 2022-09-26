function findTargetInFacts(facts, target) {
  if (target in facts) {
    return {
      logicalConstant: target,
      value: facts[target],
    };
  }
  return null;
}

module.exports = { findTargetInFacts };
