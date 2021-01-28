/* eslint-disable max-len***REMOVED***/
/* eslint-disable no-plusplus***REMOVED***/
/* eslint-disable no-console***REMOVED***/
const data = require('./utils.js');
const db = require('./index.js');

const seedTable = (numberOfRows) => {
  let row = numberOfRows;

  while (row > 0) {
    const price = data.price();
    console.log('type of price:', typeof price);
    const priceReduction = data.randomFloat(0, price, 2);

    db
      .query(`INSERT INTO items (item_name, best_seller, price, price_reduction, in_stock, us_free_shipping, carts_item_is_in) VALUES ('${data.itemName()***REMOVED***', ${data.randomBool()***REMOVED***, ${price***REMOVED***, ${priceReduction***REMOVED***, ${data.randomBool()***REMOVED***, ${data.randomBool()***REMOVED***, ${data.randomInt(0, 20)***REMOVED***)`)
      .catch((error) => console.error('Error saving item to database', error));

    row--;
***REMOVED***
***REMOVED***;


// Seed db with a certain number of rows of data
seedTable(10);
