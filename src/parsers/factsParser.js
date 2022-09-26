const truthyMapper = {
  yes: true,
  no: false,
};

/**
 * @param string facts
 * @returns { [key: string]: boolean } factsObject
 */
function factsParser(facts) {
  const factsArr = facts.split('\n').map((fact) => {
    const pattern = /([a-zA-Z])=(yes|no)/;
    const match = fact.match(pattern);
    if (!match) throw new Error('Could not resolve fact: ', fact);
    const [, logicalConstant, truthy] = match;
    return {
      logicalConstant,
      truthy: truthyMapper[truthy],
    };
  });
  const factsObject = {};
  factsArr.forEach((fact) => {
    factsObject[fact.logicalConstant] = fact.truthy;
  });
  return factsObject;
}

module.exports = {
  factsParser,
};
