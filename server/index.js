/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const db = require('../database/index.js');

const app = express();
const port = 3004;

app.use(express.static('client/dist'));
app.use(express.json());

// Get all item data from db
app.get('/shopping/items', (req, res) => {
  console.log('GET request for all items successful');
  db
    .query('SELECT * FROM items')
    .then((result) => {
      console.log(result.rows);
      res.send('Successfully got data from db');
    })
    .catch((error) => {
      console.error(error);
      res.send('Error getting data from db');
    });
});

// Get one item data from db
app.get('/shopping/items/:item_id', (req, res) => {
  console.log('this is the item id:', req.params.item_id);
  db
    .query(`SELECT * FROM items WHERE item_id = ${req.params.item_id}`)
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
