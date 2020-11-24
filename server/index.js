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

// Get one item data from db
app.get('/shopping/items/:itemId', (req, res) => {
  console.log('this is the item id:', req.params.itemId);

  db
    .query(`SELECT***REMOVED*** FROM items WHERE item_id = ${req.params.itemId***REMOVED***`)
    .then((result) => {
      console.log(result.rows[0]);
      res.send(result.rows[0]);
  ***REMOVED***)
    .catch((error) => {
      console.error(error);
      res.send('Error getting data from db');
  ***REMOVED***);
***REMOVED***);

// Get seller info
const getSellerInfo = (itemId) => {
  axios.get(`http://localhost:3005/items/${itemId***REMOVED***/seller`)
    .then((response) => {
      console.log('response from Kendalls server:', response);
  ***REMOVED***)
    .catch((error) => {
      console.log(error);
  ***REMOVED***);
***REMOVED***;

app.listen(port, () => {
  console.log(`Fetsy shopping listening at port ${port***REMOVED***`);
***REMOVED***);
