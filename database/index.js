// brew services start postgresql
// psql postgres
// CREATE ROLE root;
// ALTER ROLE root CREATEDB;
// psql -d postgres -U root (connect to postgres as user root)
// psql postgres < database/schema.sql (run schema as superuser)
// \l - list database
// \c - connect to database
// \d - list relations (tables) in database we're connected to
// SELECT***REMOVED*** FROM items

const { Pool ***REMOVED*** = require('pg');

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'fetsy',
***REMOVED***);

const model = {
  getAll: (cb) => {
    pool.query('SELECT***REMOVED*** FROM items ORDER BY item_id ASC', (err, result) => {
      if (err) {
        cb(err, null);
    ***REMOVED*** else {
        cb(null, result);
    ***REMOVED***
  ***REMOVED***);
***REMOVED***

  getOne: (itemId, cb) => {
    pool.query('SELECT***REMOVED*** FROM items WHERE item_id = $1', [itemId], (err, result) => {
      if (err) {
        cb(err, null);
    ***REMOVED*** else {
        cb(null, result);
    ***REMOVED***
  ***REMOVED***);
***REMOVED***

  post: (data, cb) => {
    pool.query('INSERT INTO items(item_name, best_seller, price, price_reduction, in_stock, us_free_shipping, carts_item_is_in) VALUES($1, $2, $3, $4, $5, $6, $7)', [data.item_name, data.best_seller, data.price, data.price_reduction, data.in_stock, data.us_free_shipping, data.carts_item_is_in], (err, result) => {
      if (err) {
        cb(err, null);
    ***REMOVED*** else {
        cb(null, result);
    ***REMOVED***
  ***REMOVED***);
***REMOVED***

  update: (itemId, data, cb) => {
    // console.log('update database id:', data)
    pool.query('UPDATE items SET item_name = $1, best_seller = $2, price = $3, price_reduction = $4, in_stock = $5, us_free_shipping = $6, carts_item_is_in = $7 WHERE item_id = $8',
      [data.item_name, data.best_seller, data.price, data.price_reduction, data.in_stock, data.us_free_shipping, data.carts_item_is_in, itemId],
      (err, result) => {
        if (err) {
          cb(err, null);
      ***REMOVED*** else {
          cb(null, result);
      ***REMOVED***
    ***REMOVED***);
***REMOVED***

  delete: (itemId, cb) => {
    // console.log('delete database id:', id)
    pool.query('DELETE FROM items WHERE item_id = $1', [itemId], (err, result) => {
      if (err) {
        cb(err, null);
    ***REMOVED*** else {
        cb(null, result);
    ***REMOVED***
  ***REMOVED***);
***REMOVED***
***REMOVED***;

module.exports = pool;
module.exports.model = model;
