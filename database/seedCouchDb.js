require('dotenv').config({path: './config/.env'});
const couchimport = require('couchimport');

// Temporarily keeping as a reference - Going to remove shortly //
// const db = require('./index.js');
// const nano = require('nano')(`http://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:5984`);

// Insert data into DB script below
const insertCouchData = () => {
  // let csvFile = __dirname + '/seed10M.csv';
  const csvFile = `${__dirname}/testFile.csv`;
  // let dbName = 'fetsy';
  const dbName = 'testing2';
  const opts = {
    delimiter: ',',
    url: `http://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:5984`,
    database: dbName
  };


  couchimport.importFile(csvFile, opts, (err, data) => {
    if (err) {
      console.log(`error with CouchDB seeding: ${err}`);
    } else {
      console.log(csvFile);
      console.log(`successful CouchDB seeding: ${data}`);
    }
  });
};

insertCouchData();
