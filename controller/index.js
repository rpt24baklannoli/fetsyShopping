const model = require('../model/index.js');
const axios = require('axios');

const shopping = {
  getOne: (itemId) => {
    return new Promise ((resolve, reject) => {
      model.model.getOne(itemId)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
    })
  },

  getAll: () => {
    return new Promise ((resolve, reject) => {
      model.model.getAll()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
    })
  },

  getDistinct: (imageId) => {
    return new Promise ((resolve, reject) => {
      model.model.getDistinct(imageId)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
    })
  },

  getSeller: (itemId) => {
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:3005/items/${itemId}/seller`)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
    })
  },

  create: (newItemData) => {
    return new Promise ((resolve, reject) => {
      model.model.post(newItemData)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      })
    })
  },

  update: (itemId, updatedData) => {
    return new Promise ((resolve, reject) => {
      model.model.update(itemId, updatedData)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      })
    })
  },

  delete: (itemId) => {
    return new Promise ((resolve, reject) => {
      model.model.delete(itemId)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      })
    })
  },

};



module.exports.shopping = shopping;
