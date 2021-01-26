const express = require('express');
const app = express();
const axios = require('axios');
const utils = require('../database/utils.js');
// const db = require('../database/index.js'); // remove once MVC is set up
const controller = require('../controller/index.js');
const mockData = require('../mockData/index.js');


const port = 3004;

// app.use('/items/:itemId', express.static('client/dist'));
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
    res.status(404).send(err);
  });
});

// Create new item
app.post('/shopping/items', (req, res) => {
  controller.shopping.create(req.body)
  .then((response) => {
    console.log('Successfully added new item');
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
      // console.log('Get One request at server:', shoppingData.rows[0]);

      // add the rest of Sunit's code here
      return new Promise ((resolve, reject) => {
        axios.get(`http://localhost:3005/items/${itemId}/seller`)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        })
      })
    })
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
      ])
    })
    .then((promiseResults) => {
      return promiseResults.map((itemDetails, index) => {
        return {
          itemImages: recommendedImages[index],
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

app.listen(port, () => {
  console.log(`Fetsy shopping listening at port ${port}`);
});






/*
*********** Original Code Below: keeping temporarily as a reference ***********

  const itemDataPromise = db
    .query(`SELECT * FROM items WHERE item_id = ${itemId}`);

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
// });
