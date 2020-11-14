// brew services start postgresql
// psql postgres
// CREATE ROLE root;
// ALTER ROLE root CREATEDB;
// psql -d postgres -U root (connect to postgres as user root)
// psql postgres < database/schema.sql (run schema as superuser)
// \l - list database
// \c - connect to database
// SELECT***REMOVED*** FROM items

const { Pool ***REMOVED*** = require('pg');

const pool = new Pool({
  // user: 'root',
  host: 'localhost',
  database: 'fetsy',
***REMOVED***);

module.exports = pool;
