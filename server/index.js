/* eslint-disable no-unused-vars***REMOVED***/
/* eslint-disable no-console***REMOVED***/
const express = require('express');
const db = require('../database/index.js');

const app = express();
const port = 3004;

app.use(express.static('client/dist'));
app.use(express.json());

// Get all item data from db
app.get('/shopping', (req, res) => {
  console.log('this is the item id:', req.params);
  db
    .query('SELECT***REMOVED*** FROM items')
    .then((result) => {
      console.log(result.rows);
      res.send('Successfully got data from db');
  ***REMOVED***)
    .catch((error) => {
      console.error(error);
      res.send('Error getting data from db');
  ***REMOVED***);
***REMOVED***);

// Get one item data from db
app.get('/shopping/:item_id', (req, res) => {
  console.log('this is the item id:', req.params.item_id);
  db
    .query(`SELECT***REMOVED*** FROM items WHERE item_id = ${req.params.item_id***REMOVED***`)
    .then((result) => {
      console.log(result.rows[0]);
      res.send(result.rows[0]);
  ***REMOVED***)
    .catch((error) => {
      console.error(error);
      res.send('Error getting data from db');
  ***REMOVED***);
***REMOVED***);

app.listen(port, () => {
  console.log(`Fetsy shopping listening at port ${port***REMOVED***`);
***REMOVED***);
