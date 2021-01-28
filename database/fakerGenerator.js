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
***REMOVED***

module.exports = createShopping;