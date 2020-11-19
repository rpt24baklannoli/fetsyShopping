// brew services start postgresql
// psql postgres
// CREATE ROLE root;
// ALTER ROLE root CREATEDB;
// psql -d postgres -U root (connect to postgres as user root)
// psql postgres < database/schema.sql (run schema as superuser)
// \l - list database
// \c - connect to database
// SELECT * FROM items

const { Pool } = require('pg');

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'fetsy',
});

module.exports = pool;
