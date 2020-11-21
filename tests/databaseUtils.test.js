const dataSeedUtils = require('../database/utils.js');

//## UNIT TESTING DATABASE SEED UTILITY FUNCTIONS

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