(function(dbConfig) {
  'use strict';

  const pgp = require('pg-promise')();

  dbConfig.db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'wine_cellar'
  });

})(module.exports);
