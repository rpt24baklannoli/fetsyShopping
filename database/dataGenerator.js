const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();

const shoppingDataGeneration = async (num) => {
  writer.pipe(fs.createWriteStream('./database/seed10M.csv'));
  for (var i = 0; i < num; i++) {
    writer.write({
      item_name: faker.commerce.productName(),
      best_seller: faker.random.boolean(),
      price: faker.commerce.price(),
      price_reduction: faker.random.number({
        'min': 0,
        'max': 10
    ***REMOVED***),
      in_stock: faker.random.boolean(),
      us_free_shipping: faker.random.boolean(),
      carts_item_is_in: faker.random.number(),
  ***REMOVED***)
***REMOVED***
  writer.end();
***REMOVED***
shoppingDataGeneration(10000000);

module.exports = shoppingDataGeneration;

// REFACTOR //
// use raw node capabilities to write CSV file
// figure out how to write to a file starting at line 9
