/* eslint-disable max-len***REMOVED***/
/* eslint-disable no-unused-vars***REMOVED***/
/* eslint-disable no-console***REMOVED***/
const express = require('express');

const app = express();
const axios = require('axios');
const utils = require('../database/utils.js');
const db = require('../database/index.js'); // remove once MVC is set up
const controller = require('../controller/index.js');

const port = 3004;

app.use('/items/:itemId', express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false ***REMOVED***));

// Get all items from db (not used on front end. built for CRUD demonstration)
app.get('/shopping/items', (req, res) => {
  controller.shopping.getAll()
  .then((shoppingData) => {
    console.log('Successfully retrieved all data')
    res.status(200).send(shoppingData.rows);
***REMOVED***)
  .catch((err) => {
    res.status(404).send(err);
***REMOVED***);
***REMOVED***);

// Create new item
app.post('/shopping/items', (req, res) => {
  controller.shopping.create(req.body)
  .then((response) => {
    console.log('Successfully added new item');
    res.status(200).send(response);
***REMOVED***)
  .catch((err) => {
    res.status(400).send(err);
***REMOVED***)
***REMOVED***)

// Update existing item
app.put('/shopping/items/:itemId', (req, res) => {
  controller.shopping.update(req.params.itemId, req.body)
  .then((response) => {
    console.log(`Successfully updated item ID ${req.params.itemId***REMOVED***`);
    res.status(200).send(response);
***REMOVED***)
  .catch((err) => {
    res.status(400).send(err);
***REMOVED***)
***REMOVED***);

// Delete existing item
app.delete('/shopping/items/:itemId', (req, res) => {
  controller.shopping.delete(req.params.itemId)
  .then((response) => {
    console.log(`Successfully deleted item ID ${req.params.itemId***REMOVED***`);
    res.status(200).send(response);
***REMOVED***)
  .catch((err) => {
    res.status(400).send(err);
***REMOVED***)
***REMOVED***);

// app.delete('/shopping/items/:itemId', (req, res) => {
//   db.model.delete(req.params.itemId, (err, data) => {
//     if (err) {
//       console.log(`failed to delete item ID ${req.params.itemId***REMOVED***: ${err***REMOVED***`);
//       res.status(404).send(err);
//   ***REMOVED*** else {
//       console.log(`successfully deleted item ID ${req.params.itemId***REMOVED***`);
//       res.status(200).send(data);
//   ***REMOVED***
// ***REMOVED***);
// ***REMOVED***);

// Get data based on one item Id
app.get('/shopping/items/:itemId', (req, res) => {
  const { itemId ***REMOVED*** = req.params;
  controller.shopping.getOne(itemId)
    .then(shoppingData => {
      console.log('Get One request at server:', shoppingData.rows[0]);
      res.status(200).send(shoppingData.rows[0]);
  ***REMOVED***)
    .catch(err => {
      res.status(404).send(err);
  ***REMOVED***);
***REMOVED***)





  /*
*********** Commented out the below code to get CRUD operational***REMOVED*************
*********** Refactoring below to unbreak the front end is the next step***REMOVED*************

  const itemDataPromise = db
    .query(`SELECT***REMOVED*** FROM items WHERE item_id = ${itemId***REMOVED***`);
console.log('item data promise:', itemDataPromise)

  // db.query(`SELECT***REMOVED*** FROM items WHERE item_id = ${itemId***REMOVED***`)
  // .then((res) => {
  //   console.log('GET REQUEST:', res.rows)
  // ***REMOVED***)

  // Seller Service Amazon EC2 Instance
  // http://3.21.248.149:3005/items/2/
  const sellerDataPromise = axios
    .get(`http://localhost:3005/items/${itemId***REMOVED***/seller`);

  // Item Images Service Amazon EC2 Instance
  // http://13.52.213.118:3006/items/1/
  const itemImagesPromise = axios
    .get('http://13.52.213.118:3006/item/images/distinct');

  Promise.all([itemDataPromise, sellerDataPromise, itemImagesPromise])
    .then((result) => {
      const itemData = result[0].rows[0];
      const sellerData = result[1].data.rows[0];
      const itemImages = result[2].data.rows;

      const imageOne = itemImages[utils.randomInt(1, 10)];
      const imageTwo = itemImages[utils.randomInt(1, 10)];
      const imageThree = itemImages[utils.randomInt(1, 10)];

      console.log(imageOne, imageTwo, imageThree);

      const imageOneItemNamePromise = db
        .query(`SELECT DISTINCT item_name, price FROM items WHERE item_id = ${imageOne.item_id***REMOVED***`);

      const imageTwoItemNamePromise = db
        .query(`SELECT DISTINCT item_name, price FROM items WHERE item_id = ${imageTwo.item_id***REMOVED***`);

      const imageThreeItemNamePromise = db
        .query(`SELECT DISTINCT item_name, price FROM items WHERE item_id = ${imageThree.item_id***REMOVED***`);

      Promise.all([imageOneItemNamePromise, imageTwoItemNamePromise, imageThreeItemNamePromise])
        .then((names) => {
          const nameOne = { item_name: names[0].rows[0].item_name ***REMOVED***;
          const priceOne = { price: names[0].rows[0].price ***REMOVED***;
          const nameTwo = { item_name: names[1].rows[0].item_name ***REMOVED***;
          const priceTwo = { price: names[1].rows[0].price ***REMOVED***;
          const nameThree = { item_name: names[2].rows[0].item_name ***REMOVED***;
          const priceThree = { price: names[2].rows[0].price ***REMOVED***;

          const recommendedItemImages = { recommendedItemImages: [{ ...imageOne, ...nameOne, ...priceOne ***REMOVED***, { ...imageTwo, ...nameTwo, ...priceTwo ***REMOVED***, { ...imageThree, ...nameThree, ...priceThree ***REMOVED***] ***REMOVED***;

          const serviceData = { ...itemData, ...sellerData, ...recommendedItemImages ***REMOVED***;

          res.send(serviceData);
      ***REMOVED***)
        .catch((error) => {
          console.error(error);
      ***REMOVED***);
  ***REMOVED***)
    .catch((error) => {
      console.error(error);
  ***REMOVED***);
   ***REMOVED***/
// ***REMOVED***);

app.listen(port, () => {
  console.log(`Fetsy shopping listening at port ${port***REMOVED***`);
***REMOVED***);
