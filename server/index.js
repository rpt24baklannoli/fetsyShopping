/* eslint-disable no-unused-vars***REMOVED***/
/* eslint-disable no-console***REMOVED***/
const express = require('express');
const axios = require('axios');
const db = require('../database/index.js');

const app = express();
const port = 3004;

app.use('/items/:itemId', express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded());

// Get all item data from db
app.get('/shopping/items', (req, res) => {
  console.log('GET request for all items successful');
  db
    .query('SELECT***REMOVED*** FROM items')
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
  ***REMOVED***)
    .catch((error) => {
      console.error(error);
      res.send('Error getting data from db');
  ***REMOVED***);
***REMOVED***);

// Get one item's data
app.get('/shopping/items/:itemId', (req, res) => {
  const { itemId ***REMOVED*** = req.params;

  const itemDataPromise = db
    .query(`SELECT***REMOVED*** FROM items WHERE item_id = ${itemId***REMOVED***`);

  const sellerDataPromise = axios
    .get(`http://localhost:3005/items/${itemId***REMOVED***/seller`);

  Promise.all([itemDataPromise, sellerDataPromise])
    .then((result) => {
      const itemData = result[0].rows[0];
      const sellerData = result[1].data.rows[0];
      const serviceData = { ...itemData, ...sellerData ***REMOVED***;
      console.log('service Data:', serviceData);
      res.send(serviceData);
  ***REMOVED***);
***REMOVED***);

app.listen(port, () => {
  console.log(`Fetsy shopping listening at port ${port***REMOVED***`);
***REMOVED***);
