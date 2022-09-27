const { backchainingRecusive } = require('./backchaining');
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
  return backchainingRecusive(facts, rules, target);
}

module.exports = { backchaining };
