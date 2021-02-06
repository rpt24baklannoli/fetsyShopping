require('dotenv').config({ path: './config/login.env' ***REMOVED***);
const couchimport = require('couchimport');

// Insert data into DB script below
const insertCouchData = () => {
  const csvFile = `${__dirname***REMOVED***/seed10M.csv`;
  const dbName = 'fetsy';

  // const csvFile = `${__dirname***REMOVED***/testFile.csv`; // used to seed DB with smaller test file.
  // const dbName = 'testing2'; // used to seed DB with smaller test file

  const opts = {
    delimiter: ',',
    url: `http://${process.env.DB_USER***REMOVED***:${process.env.DB_PASS***REMOVED***@${process.env.DB_HOST***REMOVED***:5984`,
    database: dbName,
***REMOVED***;

  couchimport.importFile(csvFile, opts, (err, data) => {
    if (err) {
      console.log(`error with CouchDB seeding: ${err***REMOVED***`);
  ***REMOVED*** else {
      console.log(`successful CouchDB seeding: ${data***REMOVED***`);
  ***REMOVED***
***REMOVED***);
***REMOVED***;

insertCouchData();
