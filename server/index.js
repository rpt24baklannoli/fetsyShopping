// const newrelic = require('newrelic');
const express = require('express');
const app = express();
const axios = require('axios');
const utils = require('../database/utils.js');
const controller = require('../controller/index.js');
const mockData = require('../mockData/index.js');
const { resolvePlugin } = require('@babel/core');

// const port = 3004;

app.use('/items/:itemId', express.static('client/dist'));
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*======== CRUD Functionality ========*/

// Get all items from db (not used on front end. built for CRUD demonstration)
app.get('/shopping/items', (req, res) => {
  controller.shopping.getAll()
  .then((shoppingData) => {
    console.log('Successfully retrieved all data')
    res.status(200).send(shoppingData.rows);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

// Create new item
app.post('/shopping/items', (req, res) => {
  controller.shopping.create(req.body)
  .then((response) => {
    console.log(`Successfully added new item id ${response.rows[0].item_id}`);
    res.status(200).send(response);
  })
  .catch((err) => {
    res.status(400).send(err);
  })
})

// Update existing item
app.put('/shopping/items/:itemId', (req, res) => {
  controller.shopping.update(req.params.itemId, req.body)
  .then((response) => {
    console.log(`Successfully updated item ID ${req.params.itemId}`);
    res.status(200).send(response);
  })
  .catch((err) => {
    res.status(400).send(err);
  })
});

// Delete existing item
app.delete('/shopping/items/:itemId', (req, res) => {
  controller.shopping.delete(req.params.itemId)
  .then((response) => {
    console.log(`Successfully deleted item ID ${req.params.itemId}`);
    res.status(200).send(response);
  })
  .catch((err) => {
    res.status(400).send(err);
  })
});

// Get Distinct
app.get('/shopping/distinctItems/:itemId', (req, res) => {
  controller.shopping.getDistinct(req.params.itemId)
  .then((response) => {
    console.log('getDistinct successful');
    res.status(200).send(response.rows)
  })
  .catch((err) => {
    res.status(400).send(err);
  })
})

/*======== Primary Data Pull To Render React ========*/

// Get data based on one item Id
app.get('/shopping/items/:itemId', (req, res) => {
  const { itemId } = req.params;
  let shoppingData;
  let sellerData;
  let recommendedImages;

  controller.shopping.getOne(itemId)
    .then(data => {
      shoppingData = data.rows[0];

      return controller.shopping.getSeller(itemId)
      .then(seller => {
        return (seller.data.rows[0]);
      })
      .catch((err) => {
        console.error(`Error with Seller GET. Response equals: '${err.response}' and instead returned hard coded data.`)
        return ({
          seller_id: 2,
          seller_rating: 4,
          total_sales: 1397,
          seller_name: 'Araceli.Bosco',
          seller_city: 'Lake Ludiestad',
          seller_state: 'Montana',
          on_etsy_since: 2011,
          item_id: 2
        })
      })
    })
    .then((res) => {
      // Assign seller data to global variable
      sellerData = res;

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
      ])
    })
    .then((promiseResults) => {
      return promiseResults.map((itemDetails, index) => {
        return {
          image_id: recommendedImages[index].image_id,
          image_url: recommendedImages[index].image_urls[utils.randomInt(1, 10)],
          item_name: itemDetails.rows[0].item_name,
          price: itemDetails.rows[0].price,
        }
      })
    })
    .then((item) => {
      // Following this variable structuring to maintain legacy code formatting
      const recommendedItemImages = { recommendedItemImages: item };

      let serviceData = {
        ...shoppingData,
        ...sellerData,
        ...recommendedItemImages
      }

      res.send(serviceData);
    })
    .catch(err => {
      res.status(404).send(err);
    });
  })

// app.listen(port, () => {
//   console.log(`Fetsy shopping listening at port ${port}`);
// });

module.exports = app;