const dataSeedUtils = require('./database/utils.js');
const axios = require ('axios');

jest.mock('axios');

describe('testing database seed utility functions', () => {

  test('passes when number returned by randomInt is within given bounds', () => {
    expect(dataSeedUtils.randomInt(1, 10)).toBeWithin(1, 11);
    expect(dataSeedUtils.randomInt(0, 5)).toBeWithin(0, 6);
***REMOVED***);

  test('passes when value returned by itemName is a string', () => {
    expect(dataSeedUtils.itemName()).toBeString();
***REMOVED***);

  test('passes when value returned by price is a number', () => {
    expect(dataSeedUtils.price()).toBeNumber();
***REMOVED***);

  test('passes when value returned by randomBool is a boolean', () => {
    expect(dataSeedUtils.randomBool()).toBeBoolean();
***REMOVED***);

***REMOVED***)



describe('API testing', () => {

  beforeEach(() => {
    jest.resetAllMocks();
***REMOVED***);

  // Test function that gets item data (mimics what front-end does)
  async function testGetItemData() {
    const response = await axios.get('/shopping/items/2');
    return response.rows[0];
***REMOVED***

  test('verifies item data returned from API call', async () => {
    axios.get.mockResolvedValue({
      rows: [
        {
          item_id: 2,
          item_name: 'irure in ut consequat dolor aliquip do laboris commodo ',
          best_seller: false,
          price: '63.49',
          price_reduction: '25.32',
          in_stock: false,
          us_free_shipping: false,
          carts_item_is_in: 13
      ***REMOVED***
  ***REMOVED***
  ***REMOVED***);

    const data = await testGetItemData();

    expect(data.item_name).toBeString();
    expect(data.price).toBeString();
    expect(data.best_seller).toBeBoolean();
    expect(data.in_stock).toBeBoolean();
    expect(data.us_free_shipping).toBeBoolean();
    expect(Number(data.price_reduction)).toBeLessThan(Number(data.price));

***REMOVED***);

***REMOVED***)

// describe('React components render correctly testing', () => {

//   test('passes when number returned by randomInt is within given bounds', () => {
//     expect(dataSeedUtils.randomInt(1, 10)).toBeWithin(1, 11);
//     expect(dataSeedUtils.randomInt(0, 5)).toBeWithin(0, 6);
// ***REMOVED***);

// ***REMOVED***)


