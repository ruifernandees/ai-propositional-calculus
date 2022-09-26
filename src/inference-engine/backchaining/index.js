const { backchainingRecusive } = require('./backchaining.js');
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
function backchaining(facts, rules, target) {
  // const allLogicalConstants = [];
  // Object.keys(facts).forEach((fact) => {
  //   allLogicalConstants.push(fact);
  // });
  // // rules.forEach((rule) => {
  // for (const rule of rules) {
  //   const allIfConstants = rule.ifLogicalConstants.map((constant) => constant.logicalConstant);
  //   const allThenConstants = rule.thenLogicalConstants.map((constant) => constant.logicalConstant);
  //   for (const constant of allIfConstants) {
  //     allLogicalConstants.push(constant);
  //   }
  //   for (const constant of allThenConstants) {
  //     allLogicalConstants.push(constant);
  //   }
  // }
  // // });
  // const notDuplicatedConstants = [...new Set(allLogicalConstants)];
  // notDuplicatedConstants.forEach((constant) => {
  //   visited[constant] = false;
  // });
  return backchainingRecusive(facts, rules, target);
}

module.exports = { backchaining };
