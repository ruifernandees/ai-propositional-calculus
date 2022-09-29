/* eslint-disable no-labels */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable arrow-body-style */
const { findTargetInFacts } = require('../findTargetInFacts');

/**
 *
 * @param {{[key: string]: boolean}} facts
 * @param {{
 *    ifLogicalConstants: {logicalConstant: string; isPositive: boolean}[],
 *    thenLogicalConstants: {logicalConstant: string; isPositive: boolean}[]
 *  }} rules
 * @param string target
 * @returns boolean
 */
function backchainingRecusive(facts, rules, target) {
  const targetInFacts = findTargetInFacts(facts, target);
  if (targetInFacts) return targetInFacts.value;
  const indexesOfRuleWithTarget = [];
  for (const ruleIndex in rules) {
    for (const constant of rules[ruleIndex].thenLogicalConstants) {
      if (constant.logicalConstant === target) {
        indexesOfRuleWithTarget.push(ruleIndex);
      }
    }
  }
  if (!indexesOfRuleWithTarget) {
    throw new Error(`Could not find rule for target: ${target}`);
  }
  for (const indexOfRuleWithTarget of indexesOfRuleWithTarget) {
    // console.log('=======', indexOfRuleWithTarget);
    const ruleWithTarget = rules[indexOfRuleWithTarget];
    let isTrue = true;
    // console.log('🚡 ', ruleWithTarget.ifLogicalConstants);
    for (const constant of ruleWithTarget.ifLogicalConstants) {
      if (facts[constant.logicalConstant] !== undefined) {
        let constantResult;
        if (constant.isPositive) {
          constantResult = facts[constant.logicalConstant];
        } else {
          constantResult = !facts[constant.logicalConstant];
        }
        // let finalResult = false;
        // if (ruleWithTarget.thenLogicalConstants[0].isPositive) {
        //   finalResult = true;
        // }
        isTrue = isTrue && constantResult; // TTT: dinamizar operação
        // console.log('* Constant ', constant, facts[constant.logicalConstant], isTrue);
        // eslint-disable-next-line no-continue
        continue;
      }
      const constantResult = backchainingRecusive(facts, rules, constant.logicalConstant);
      // console.log('Constant ', constantResult, constant, facts[constant.logicalConstant]);
      let finalResult;
      if (constant.isPositive) {
        finalResult = constantResult;
      } else {
        finalResult = !constantResult;
      }
      // eslint-disable-next-line no-param-reassign
      facts[constantResult.logicalConstant] = finalResult;
      isTrue = isTrue && finalResult;
    }
    // console.log('=======');
    if (isTrue) {
      return isTrue;
    }
  }
  return false;
}

module.exports = { backchainingRecusive };
