const fs = require('fs');
const { readFileInDatabase } = require('../helpers/readFileInDatabase');

const { factsParser } = require('./factsParser');

test('Should return correctly', () => {
  const database = 'ii';
  const facts = readFileInDatabase('facts.txt', database);
  const result = factsParser(facts);
  expect(result).toEqual(
    {
      A: true, C: true, D: true, E: true, G: true, H: true, K: true,
    },
  );
});
