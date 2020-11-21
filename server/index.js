/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
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

// Get one item data from db
app.get('/shopping/items/:itemId', (req, res) => {
  console.log('these are the request params:', req.params);
  console.log('this is the item id:', req.params.itemId);
  db
    .query(`SELECT * FROM items WHERE item_id = ${req.params.itemId}`)
    .then((result) => {
      console.log(result.rows[0]);
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.error(error);
      res.send('Error getting data from db');
    });
});

app.listen(port, () => {
  console.log(`Fetsy shopping listening at port ${port}`);
});
