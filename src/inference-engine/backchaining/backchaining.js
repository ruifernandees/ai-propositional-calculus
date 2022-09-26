/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable arrow-body-style */
const { findTargetInFacts } = require('../findTargetInFacts');

/**
 *
 * @param {{[key: string]: boolean}} facts
 * @param {
 *  {{
 *    ifLogicalConstants: {logicalConstant: string; isPositive: boolean}[],
 *    thenLogicalConstants: {logicalConstant: string; isPositive: boolean}[]
 *  }} rules
 * @param string target
 * @returns boolean
 */
function backchainingRecusive(facts, rules, target) {
  // console.log(rules[0]);
  const targetInFacts = findTargetInFacts(facts, target);
  if (targetInFacts) return targetInFacts.value;
  // console.log(target);
  let indexOfRuleWithTarget = null;
  for (const ruleIndex in rules) {
    for (const constant of rules[ruleIndex].thenLogicalConstants) {
      if (constant.logicalConstant === target) {
        indexOfRuleWithTarget = ruleIndex;
      }
    }
  }
  if (indexOfRuleWithTarget === null) {
    throw new Error(`Could not find rule for target: ${target}`);
  }
  // const indexOfRuleWithTarget = rules.findIndex((rule) => {
  //   return rule.thenLogicalConstants.find((constant) => constant.logicalConstant === target);
  // });
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
      isTrue = isTrue && constantResult; // TTT: dinamizar operação
      console.log('* Constant ', constant, facts[constant.logicalConstant], isTrue);
      // eslint-disable-next-line no-continue
      continue;
    }
    // console.log('Constant ', constant, facts[constant.logicalConstant]);
    const constantResult = backchainingRecusive(facts, rules, constant.logicalConstant);
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
  return isTrue;
}

module.exports = { backchainingRecusive };
