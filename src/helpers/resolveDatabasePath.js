const path = require('path');

function resolveDatabasePath(database) {
  const databases = {
    q1e1: 'question-1-example-1',
    q1e2: 'question-1-example-2',
    ii: 'knowledge-ii',
  };

  return path.resolve(__dirname, '..', 'database', databases[database]);
}

module.exports = { resolveDatabasePath };
