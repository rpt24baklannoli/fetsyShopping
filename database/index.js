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

const { Pool } = require('pg');
const { useCallback } = require('react');

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'fetsy',
});

const model = {
  post: (data, cb) => {
    pool.query('INSERT INTO items(item_name, best_seller, price, price_reduction, in_stock, us_free_shipping, carts_item_is_in) VALUES($1, $2, $3, $4, $5, $6, $7)', [data.item_name, data.best_seller, data.price, data.price_reduction, data.in_stock, data.us_free_shipping, data.carts_item_is_in], (err, result) => {
      if (err) {
        cb(err, null)
      } else {
        cb(null, result)
      }
    })
  },

  update: (itemId, data, cb) => {
    // console.log('update database id:', data)
    pool.query('UPDATE items SET item_name = $1, best_seller = $2, price = $3, price_reduction = $4, in_stock = $5, us_free_shipping = $6, carts_item_is_in = $7 WHERE item_id = $8',
    [data.item_name, data.best_seller, data.price, data.price_reduction, data.in_stock, data.us_free_shipping, data.carts_item_is_in, itemId],
    (err, result) => {
      if (err) {
        cb(err,  null)
      } else {
        cb(null, result)
      }
    })
  },

  delete: (id, cb) => {
    console.log('delete database id:', id)
  }
}

// let post = (data, cb) => {
//   // console.log('database data:', data);
//   pool.query('INSERT INTO items(item_name, best_seller, price, price_reduction, in_stock, us_free_shipping, carts_item_is_in) VALUES($1, $2, $3, $4, $5, $6, $7)', [data.item_name, data.best_seller, data.price, data.price_reduction, data.in_stock, data.us_free_shipping, data.carts_item_is_in], (err, data) => {
//     if (err) {
//       cb(err, null)
//     } else {
//       cb(null, data)
//     }
//   })
// };

module.exports = pool;
module.exports.model = model;
// module.exports.post = post;
