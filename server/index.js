/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
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
    .query('SELECT * FROM items')
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.error(error);
      res.send('Error getting data from db');
    });
});

// Get data based on one item Id
app.get('/shopping/items/:itemId', (req, res) => {
  const { itemId } = req.params;

  const itemDataPromise = db
    .query(`SELECT * FROM items WHERE item_id = ${itemId}`);

  const sellerDataPromise = axios
    .get(`http://localhost:3005/items/${itemId}/seller`);

  Promise.all([itemDataPromise, sellerDataPromise])
    .then((result) => {
      const itemData = result[0].rows[0];
      const sellerData = result[1].data.rows[0];
      const serviceData = { ...itemData, ...sellerData };
      console.log('service Data:', serviceData);
      res.send(serviceData);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(port, () => {
  console.log(`Fetsy shopping listening at port ${port}`);
});
