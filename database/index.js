const { Pool } = require('pg');
require('dotenv').config({ path: './config/login.env' });

const pool = new Pool({
  // Localhost Credentials
  user: 'root',
  host: 'localhost',
  database: 'fetsy',

  // // EC2 Credentials
  // user: 'postgres',
  // host: '184.169.182.48',
  // database: 'fetsy',
  // port: 5432,
  // password: DB_PASS,
});

pool.connect()

module.exports = pool;


/**** Legacy code. Instructions for postgres setup. ****/
// brew services start postgresql
// psql postgres
// CREATE ROLE root;
// ALTER ROLE root CREATEDB;
// psql -d postgres -U root (connect to postgres as user root)
// psql postgres < database/schema.sql (run schema as superuser)
// \l - list database
// \c - connect to database
// \d - list relations (tables) in database we're connected to
// SELECT * FROM items