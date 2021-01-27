const pool = require ('../database/index.js');

const model = {
  getOne: (itemId) => {
    return pool.query('SELECT***REMOVED*** FROM items WHERE item_id = $1', [itemId]);
***REMOVED***

  getAll: () => {
    return pool.query('SELECT***REMOVED*** FROM items ORDER BY item_id ASC')
***REMOVED***

  getDistinct: (imageId) => {
    return pool.query('SELECT DISTINCT item_name, price FROM items WHERE item_id = $1', [imageId])
***REMOVED***

  post: (data) => {
    return pool.query('INSERT INTO items(item_name, best_seller, price, price_reduction, in_stock, us_free_shipping, carts_item_is_in) VALUES($1, $2, $3, $4, $5, $6, $7)', [data.item_name, data.best_seller, data.price, data.price_reduction, data.in_stock, data.us_free_shipping, data.carts_item_is_in])
***REMOVED***

  update: (itemId, data) => {
    return pool.query('UPDATE items SET item_name = $1, best_seller = $2, price = $3, price_reduction = $4, in_stock = $5, us_free_shipping = $6, carts_item_is_in = $7 WHERE item_id = $8',
    [data.item_name, data.best_seller, data.price, data.price_reduction, data.in_stock, data.us_free_shipping, data.carts_item_is_in, itemId])
***REMOVED***

  delete: (itemId) => {
    return pool.query('DELETE FROM items WHERE item_id = $1', [itemId])
***REMOVED***

***REMOVED***;

module.exports.model = model;
