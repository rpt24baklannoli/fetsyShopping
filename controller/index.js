const model = require('../model/index.js')

const shopping = {
  getOne: (itemId) => {
    return new Promise ((resolve, reject) => {
      model.model.getOne(itemId)
      .then((data) => {
        resolve(data);
    ***REMOVED***)
      .catch((err) => {
        reject(err);
    ***REMOVED***);
  ***REMOVED***)
***REMOVED***

  getAll: () => {
    return new Promise ((resolve, reject) => {
      model.model.getAll()
      .then((data) => {
        resolve(data);
    ***REMOVED***)
      .catch((err) => {
        reject(err);
    ***REMOVED***)
  ***REMOVED***)
***REMOVED***

  getDistinct: (imageId) => {
    return new Promise ((resolve, reject) => {
      model.model.getDistinct(imageId)
      .then((data) => {
        resolve(data);
    ***REMOVED***)
      .catch((err) => {
        reject(err);
    ***REMOVED***)
  ***REMOVED***)
***REMOVED***

  create: (newItemData) => {
    return new Promise ((resolve, reject) => {
      model.model.post(newItemData)
      .then((response) => {
        resolve(response);
    ***REMOVED***)
      .catch((err) => {
        reject(err);
    ***REMOVED***)
  ***REMOVED***)
***REMOVED***

  update: (itemId, updatedData) => {
    return new Promise ((resolve, reject) => {
      model.model.update(itemId, updatedData)
      .then((response) => {
        resolve(response);
    ***REMOVED***)
      .catch((err) => {
        reject(err);
    ***REMOVED***)
  ***REMOVED***)
***REMOVED***

  delete: (itemId) => {
    return new Promise ((resolve, reject) => {
      model.model.delete(itemId)
      .then((response) => {
        resolve(response);
    ***REMOVED***)
      .catch((err) => {
        reject(err);
    ***REMOVED***)
  ***REMOVED***)
***REMOVED***

***REMOVED***;



module.exports.shopping = shopping;
