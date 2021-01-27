const faker = require('faker');

let createShopping = () => {
  let item_name = faker.commerce.productName();
  let best_seller = faker.random.boolean();
  let price = faker.commerce.price();
  let price_reduction = faker.random.number({
    'min': 0,
    'max': price
***REMOVED***);
  let in_stock = faker.random.boolean();
  let us_free_shipping = faker.random.boolean();
  let carts_item_is_in = faker.random.number();

/*
CREATE TABLE IF NOT EXISTS items (
  item_id SERIAL PRIMARY KEY,
  item_name VARCHAR(150),
  best_seller BOOLEAN,
  price NUMERIC,
  price_reduction NUMERIC,
  in_stock BOOLEAN,
  us_free_shipping BOOLEAN,
  carts_item_is_in INT
);
*/

***REMOVED***

module.exports = createShopping;