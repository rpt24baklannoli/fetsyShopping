const faker = require('faker');
const fs = require('fs');

const shoppingDataGeneration = async (num) => {
  // let writer = fs.createWriteStream('./database/seed10M.csv');
  const writer = fs.createWriteStream('./database/testFile.csv');

  writer.write('item_name,best_seller,price,price_reduction,in_stock,us_free_shipping,carts_item_is_in\n');

  for (let i = 0; i < num; i++) {
    // Define schema column values
    const item_name = faker.commerce.productName();
    const best_seller = faker.random.boolean();
    const price = faker.commerce.price();
    const price_reduction = faker.random.number({
      min: 0,
      max: 10,
    });
    const in_stock = faker.random.boolean();
    const us_free_shipping = faker.random.boolean();
    const carts_item_is_in = faker.random.number();

    // create new value in CSV file
    writer.write(`${item_name},${best_seller},${price},${price_reduction},${in_stock},${us_free_shipping},${carts_item_is_in}\n`);
  }
  writer.end();
};

// shoppingDataGeneration(10_000_000);
shoppingDataGeneration(100);

module.exports = shoppingDataGeneration;
