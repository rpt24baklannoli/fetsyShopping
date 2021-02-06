require('dotenv').config({ path: './config/login.env' });
const couchimport = require('couchimport');

// Insert data into DB script below
const insertCouchData = () => {
  const csvFile = `${__dirname}/seed10M.csv`;
  const dbName = 'fetsy';

  // const csvFile = `${__dirname}/testFile.csv`; // used to seed DB with smaller test file.
  // const dbName = 'testing2'; // used to seed DB with smaller test file

  const opts = {
    delimiter: ',',
    url: `http://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:5984`,
    database: dbName,
  };

  couchimport.importFile(csvFile, opts, (err, data) => {
    if (err) {
      console.log(`error with CouchDB seeding: ${err}`);
    } else {
      console.log(`successful CouchDB seeding: ${data}`);
    }
  });
};

insertCouchData();
