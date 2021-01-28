const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();

// Use Faker to generate fake values
// let createShopping = () => {
//   let item_name = faker.commerce.productName();
//   let best_seller = faker.random.boolean();
//   let price = faker.commerce.price();
//   let price_reduction = faker.random.number({
//     'min': 0,
//     'max': price
//   });
//   let in_stock = faker.random.boolean();
//   let us_free_shipping = faker.random.boolean();
//   let carts_item_is_in = faker.random.number();
// }

const shoppingDataGeneration = async (num) => {

  writer.pipe(fs.createWriteStream('./database/seed10M.csv'));
  // testing with 100 records first
  for (var i = 0; i < num; i++) {
    writer.write({
      item_name: faker.commerce.productName(),
      best_seller: faker.random.boolean(),
      price: faker.commerce.price(),
      price_reduction: faker.random.number({
        'min': 0,
        'max': 10
      }),
      in_stock: faker.random.boolean(),
      us_free_shipping: faker.random.boolean(),
      carts_item_is_in: faker.random.number(),
    })
  }
  writer.end();
}
shoppingDataGeneration(10000000);

// Insert data into DB script below
// TODO: separate into separate file and get working.
const insertData = async () => {
  let csvFile = __dirname + '/seedData.csv';
  let query = `COPY images (items) FROM '${csvFile}' DELIMITER ',' CSV HEADER;`
  db.query(query, (err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log('successfully inserted csv data');
    }
  });
}

// module.exports = createShopping;
module.exports = shoppingDataGeneration;