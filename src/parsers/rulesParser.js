function expressionParser(expression) {
  return expression.split(/&|\|/).map((item) => {
    const pattern = /(?:(not) )*[a-zA-Z]/;
    const isPositive = !item.match(pattern)?.find((match) => match === 'not');
    return {
      logicalConstant: item.replace('not', '').trim(),
      isPositive,
    };
  });
}

/**
 *
 * @param string rules
 */
function rulesParser(rules) {
  return rules.split('\n').map((rule) => {
    const [rawIfExpression, rawThenExpression] = rule.split('THEN');
    const ifExpression = rawIfExpression.replace('IF', '').trim();
    const thenExpression = rawThenExpression.trim();
    const ifLogicalConstants = expressionParser(ifExpression);
    const thenLogicalConstants = expressionParser(thenExpression);
    return {
      ifLogicalConstants, thenLogicalConstants,
    };
  });
}

module.exports = { rulesParser };
