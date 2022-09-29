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
function forwardChaining(facts, rules, target) {
  return true;
}

module.exports = { forwardChaining };
