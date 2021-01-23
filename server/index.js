/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');

const app = express();
const axios = require('axios');
const utils = require('../database/utils.js');
const db = require('../database/index.js');

const port = 3004;

app.use('/items/:itemId', express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Get all items from db
app.get('/shopping/items', (req, res) => {
  db.model.getAll((err, data) => {
    if (err) {
      console.log('failed to get all data:', err);
      res.status(404).send(err);
    } else {
      console.log('successfully retrieved all data');
      res.status(200).send(data.rows);
    }
  });
});

// Create new item
app.post('/shopping/items', (req, res) => {
  db.model.post(req.body, (err, data) => {
    if (err) {
      console.log(`failed to add new item: ${err}`);
      res.status(404).send(err);
    } else {
      console.log('successfully added new item');
      res.status(200).send(data);
    }
  });
});

// Update existing item
app.put('/shopping/items/:itemId', (req, res) => {
  db.model.update(req.params.itemId, req.body, (err, data) => {
    if (err) {
      console.log(`failed to update item ID ${req.params.itemId}: ${err}`);
      res.status(404).send(err);
    } else {
      console.log(`successfully updated item ID ${req.params.itemId}`);
      res.status(200).send(data);
    }
  });
});

// Delete existing item
app.delete('/shopping/items/:itemId', (req, res) => {
  db.model.delete(req.params.itemId, (err, data) => {
    if (err) {
      console.log(`failed to delete item ID ${req.params.itemId}: ${err}`);
      res.status(404).send(err);
    } else {
      console.log(`successfully deleted item ID ${req.params.itemId}`);
      res.status(200).send(data);
    }
  });
});

// Get data based on one item Id
app.get('/shopping/items/:itemId', (req, res) => {
  const { itemId } = req.params;

  db.model.getOne(itemId, (err, data) => {
    if (err) {
      console.log(`failed to get data for item ID ${itemId}: ${err}`);
      res.status(404).send(err);
    } else {
      console.log(`successfully retrieved data for item ID ${itemId}`);
      res.status(200).send(data.rows[0]);
    }
  });

  /*
*********** Commented out the below code to get CRUD operational ***********
*********** Refactoring below to unbreak the front end is the next step ***********

  const itemDataPromise = db
    .query(`SELECT * FROM items WHERE item_id = ${itemId}`);
console.log('item data promise:', itemDataPromise)

  // db.query(`SELECT * FROM items WHERE item_id = ${itemId}`)
  // .then((res) => {
  //   console.log('GET REQUEST:', res.rows)
  // })

  // Seller Service Amazon EC2 Instance
  // http://3.21.248.149:3005/items/2/
  const sellerDataPromise = axios
    .get(`http://localhost:3005/items/${itemId}/seller`);

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
        .query(`SELECT DISTINCT item_name, price FROM items WHERE item_id = ${imageOne.item_id}`);

      const imageTwoItemNamePromise = db
        .query(`SELECT DISTINCT item_name, price FROM items WHERE item_id = ${imageTwo.item_id}`);

      const imageThreeItemNamePromise = db
        .query(`SELECT DISTINCT item_name, price FROM items WHERE item_id = ${imageThree.item_id}`);

      Promise.all([imageOneItemNamePromise, imageTwoItemNamePromise, imageThreeItemNamePromise])
        .then((names) => {
          const nameOne = { item_name: names[0].rows[0].item_name };
          const priceOne = { price: names[0].rows[0].price };
          const nameTwo = { item_name: names[1].rows[0].item_name };
          const priceTwo = { price: names[1].rows[0].price };
          const nameThree = { item_name: names[2].rows[0].item_name };
          const priceThree = { price: names[2].rows[0].price };

          const recommendedItemImages = { recommendedItemImages: [{ ...imageOne, ...nameOne, ...priceOne }, { ...imageTwo, ...nameTwo, ...priceTwo }, { ...imageThree, ...nameThree, ...priceThree }] };

          const serviceData = { ...itemData, ...sellerData, ...recommendedItemImages };

          res.send(serviceData);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
    */
});

app.listen(port, () => {
  console.log(`Fetsy shopping listening at port ${port}`);
});
