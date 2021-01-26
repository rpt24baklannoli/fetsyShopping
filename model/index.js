const pool = require ('../database/index.js');

const model = {
  getOne: (itemId) => {
    return pool.query('SELECT * FROM items WHERE item_id = $1', [itemId]);
  },

  getAll: () => {
    return pool.query('SELECT * FROM items ORDER BY item_id ASC')
  },

  post: (data) => {
    return pool.query('INSERT INTO items(item_name, best_seller, price, price_reduction, in_stock, us_free_shipping, carts_item_is_in) VALUES($1, $2, $3, $4, $5, $6, $7)', [data.item_name, data.best_seller, data.price, data.price_reduction, data.in_stock, data.us_free_shipping, data.carts_item_is_in])
  },

  update: (itemId, data) => {
    return pool.query('UPDATE items SET item_name = $1, best_seller = $2, price = $3, price_reduction = $4, in_stock = $5, us_free_shipping = $6, carts_item_is_in = $7 WHERE item_id = $8',
    [data.item_name, data.best_seller, data.price, data.price_reduction, data.in_stock, data.us_free_shipping, data.carts_item_is_in, itemId])
  },

  delete: (itemId) => {
    console.log(itemId)
    return pool.query('DELETE FROM items WHERE item_id = $1', [itemId])
  },

};

module.exports.model = model;
