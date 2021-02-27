const express = require('express');
const app = express();
const axios = require('axios');
const utils = require('../database/utils.js');
const controller = require('../controller/index.js');
const mockData = require('../mockData/index.js');
var cors = require('cors')


// const port = 3004;
app.use(cors())
app.use('/items/:itemId', express.static('client/dist'));
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false ***REMOVED***));

/*======== CRUD Functionality ========*/

// Get all items from db (not used on front end. built for CRUD demonstration)
app.get('/shopping/items', (req, res) => {
  controller.shopping.getAll()
  .then((shoppingData) => {
    console.log('Successfully retrieved all data')
    res.status(200).send(shoppingData.rows);
***REMOVED***)
  .catch((err) => {
    res.status(400).send(err);
***REMOVED***);
***REMOVED***);

// Create new item
app.post('/shopping/items', (req, res) => {
  controller.shopping.create(req.body)
  .then((response) => {
    console.log(`Successfully added new item id ${response.rows[0].item_id***REMOVED***`);
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

// Get Distinct
app.get('/shopping/distinctItems/:itemId', (req, res) => {
  controller.shopping.getDistinct(req.params.itemId)
  .then((response) => {
    console.log('getDistinct successful');
    res.status(200).send(response.rows)
***REMOVED***)
  .catch((err) => {
    res.status(400).send(err);
***REMOVED***)
***REMOVED***)

/*======== Primary Data Pull To Render React ========*/

// Get data based on one item Id
app.get('/shopping/items/:itemId', (req, res) => {
  const { itemId ***REMOVED*** = req.params;
  let shoppingData;
  let sellerData;
  let recommendedImages;

  controller.shopping.getOne(itemId)
    .then(data => {
      shoppingData = data.rows[0];

      // remove promise?
      return new Promise ((resolve, reject) => {
        axios.get(`http://localhost:3005/items/${itemId***REMOVED***/seller`)
        .then((response) => {
          resolve(response);
      ***REMOVED***)
        .catch((err) => {
          reject(err);
      ***REMOVED***)
    ***REMOVED***)
  ***REMOVED***)
    .then((res) => {
      // Assign seller data to global variable
      sellerData = res.data.rows;

      /*==== To be replaced with actual image service data ====*/
      const imageOne = mockData.mockImages[utils.randomInt(1, 10)];
      const imageTwo = mockData.mockImages[utils.randomInt(1, 10)];
      const imageThree = mockData.mockImages[utils.randomInt(1, 10)];

      // Assign image data to global variable as an array
      recommendedImages = [imageOne, imageTwo, imageThree]
      return Promise.all([
        controller.shopping.getDistinct(imageOne.image_id),
        controller.shopping.getDistinct(imageTwo.image_id),
        controller.shopping.getDistinct(imageThree.image_id),
  ***REMOVED***)
  ***REMOVED***)
    .then((promiseResults) => {
      return promiseResults.map((itemDetails, index) => {
        return {
          image_id: recommendedImages[index].image_id,
          image_url: recommendedImages[index].image_urls[utils.randomInt(1, 10)],
          item_name: itemDetails.rows[0].item_name,
          price: itemDetails.rows[0].price,
      ***REMOVED***
    ***REMOVED***)
  ***REMOVED***)
    .then((item) => {
      // Following this variable structuring to maintain legacy code formatting
      const recommendedItemImages = { recommendedItemImages: item ***REMOVED***;

      let serviceData = {
        ...shoppingData,
        ...sellerData,
        ...recommendedItemImages
    ***REMOVED***

      res.send(serviceData);
  ***REMOVED***)
    .catch(err => {
      res.status(404).send(err);
  ***REMOVED***);
***REMOVED***)

// app.listen(port, () => {
//   console.log(`Fetsy shopping listening at port ${port***REMOVED***`);
// ***REMOVED***);

module.exports = app;