require('dotenv').config({ path: './config/.env' ***REMOVED***);
const couchimport = require('couchimport');

// Temporarily keeping as a reference - Going to remove shortly //
// const db = require('./index.js');
// const nano = require('nano')(`http://${process.env.DB_USER***REMOVED***:${process.env.DB_PASS***REMOVED***@localhost:5984`);

// Insert data into DB script below
const insertCouchData = () => {
  const csvFile = `${__dirname***REMOVED***/seed10M.csv`;
  const dbName = 'fetsy';
  // const csvFile = `${__dirname***REMOVED***/testFile.csv`;
  // const dbName = 'testing2';

  const opts = {
    delimiter: ',',
    url: `http://${process.env.DB_USER***REMOVED***:${process.env.DB_PASS***REMOVED***@${process.env.DB_HOST***REMOVED***:5984`,
    database: dbName,
***REMOVED***;

  couchimport.importFile(csvFile, opts, (err, data) => {
    if (err) {
      console.log(`error with CouchDB seeding: ${err***REMOVED***`);
  ***REMOVED*** else {
      console.log(csvFile);
      console.log(`successful CouchDB seeding: ${data***REMOVED***`);
  ***REMOVED***
***REMOVED***);
***REMOVED***;

insertCouchData();
