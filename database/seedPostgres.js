const db = require('./index.js');

// Insert data into DB script below
const insertPostgresData = async () => {
  const csvFile = `${__dirname}/seed10M.csv`;
  const query = `COPY items (item_name, best_seller, price, price_reduction, in_stock, us_free_shipping, carts_item_is_in) FROM '${csvFile}' DELIMITER ',' CSV HEADER;`;
  db.query(query, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Successfully inserted csv data into PostgreSQL: ${res}`);
    }
  });
};

insertPostgresData();
