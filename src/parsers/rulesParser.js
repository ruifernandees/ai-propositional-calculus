function ifMatchParser(ifMatch) {
  const ifLogicalConstants = [];
  let isNextItemNegative = false;
  ifMatch.forEach((item) => {
    if (typeof item !== 'string') return;
    if (item === 'not') {
      isNextItemNegative = true;
      return;
    }
    const isNotALogicalConstant = item.length > 1;
    if (isNotALogicalConstant) {
      isNextItemNegative = false;
      return;
    }
    ifLogicalConstants.push({
      logicalConstant: item,
      isPositive: !isNextItemNegative,
    });
    isNextItemNegative = false;
  });
  return ifLogicalConstants;
}

/**
 *
 * @param string rules
 */
function rulesParser(rules) {
  return rules.split('\n').map((rule) => {
    const ifPattern = /IF (?:(not) )?([a-zA-Z]) (?:& (?:(not) )*([a-zA-Z]))*/;
    const ifMatch = rule.match(ifPattern);
    if (!ifMatch) throw new Error('Invalid syntax: ', rule);
    const ifLogicalConstants = ifMatchParser(ifMatch);
    const thenPattern = /THEN /;
    return {
      // ifLogicalConstants,
      ifMatch,
    };
  });
}

module.exports = { rulesParser };
