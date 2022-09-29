/* eslint-disable arrow-body-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
function allUsed(ruleQueue, usedRules) {
  return ruleQueue.reduce((previousValue, current) => {
    return previousValue && usedRules.includes(current);
  }, true);
}

function buildRuleQueue(facts, rules, ruleQueue) {
  for (const rule in rules) {
    let canSolveRule = true;
    for (const constant of rules[rule].ifLogicalConstants) {
      if (!Object.keys(facts).includes(constant.logicalConstant)) {
        canSolveRule = false;
        continue;
      }
      if (constant.isPositive && facts[constant] === false) {
        canSolveRule = false;
        continue;
      }
      if (!constant.isPositive && facts[constant] === true) {
        canSolveRule = false;
        continue;
      }
    }
    if (!canSolveRule) continue;
    if (ruleQueue.includes(rule)) continue;
    ruleQueue.push(rule);
  }
  return ruleQueue;
}

/**
 *
 * @param {{[key: string]: boolean}} facts
 * @param {{
 *    ifLogicalConstants: {logicalConstant: string; isPositive: boolean}[],
 *    thenLogicalConstants: {logicalConstant: string; isPositive: boolean}[]
 *  }} rules
 * @returns boolean
 */
function forwardChainingThatReturnsFacts(facts, rules) {
  let ruleQueue = [];
  const usedRules = [];
  ruleQueue = buildRuleQueue(facts, rules, ruleQueue);
  let ruleQueueIterator = 0;
  while (!allUsed(ruleQueue, usedRules)) {
    const ruleIndex = ruleQueue[ruleQueueIterator];
    // console.log('🧑 ', ruleQueue, ruleQueueIterator, ruleIndex);
    const currentRule = rules[ruleIndex];
    // console.log('✈ ', currentRule);
    ruleQueueIterator++;
    for (const thenConstant of currentRule.thenLogicalConstants) {
      if (thenConstant.isPositive) {
        facts[thenConstant.logicalConstant] = true;
      } else {
        facts[thenConstant.logicalConstant] = false;
      }
      usedRules.push(ruleIndex);
    }
    ruleQueue = buildRuleQueue(facts, rules, ruleQueue);
  }
  return facts;
}

module.exports = { forwardChainingThatReturnsFacts };
