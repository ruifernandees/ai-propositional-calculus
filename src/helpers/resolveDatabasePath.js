const path = require('path');

function resolveDatabasePath(database) {
  const databases = {
    i: 'knowledge-i',
    ii: 'knowledge-ii',
  };

  return path.resolve(__dirname, '..', 'database', databases[database]);
}

module.exports = { resolveDatabasePath };
