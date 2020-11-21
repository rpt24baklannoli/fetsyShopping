const dataSeedUtils = require('./database/utils.js');

const axios = require ('axios');
jest.mock('axios');

import React from 'react';
import { shallow, mount, render ***REMOVED*** from 'enzyme';

import CartCol from './client/src/components/cartCol.jsx';
import BuyBox from './client/src/components/buyBox.jsx';
import ShoppingRegion from './client/src/components/ShoppingRegion.jsx';


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


//## UNIT TESTING API CALLS (MOCK)

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


//## UNIT TESTING REACT COMPONENTS (USING ENZYME)

describe('React components render correctly - testing', () => {

  test('CartCol renders without crashing', () => {
    shallow(<CartCol />);
***REMOVED***);

  // This test will need to be modified once react componenets are
  // correctly rendered
  it("BuyBox renders component header", () => {
    const wrapper = shallow(<BuyBox />);
    const header = <h2>BuyBox Component</h2>;
    expect(wrapper.contains(header)).toEqual(true);
***REMOVED***);

***REMOVED***)

describe('Props are being passed down correctly - testing', () => {

  const data = {
    best_seller: true,
    carts_item_is_in: 3,
    in_stock: true,
    item_id: 99,
    item_name: "fake item name",
    price: "50.00",
    price_reduction: "0.99",
    us_free_shipping: true
***REMOVED***

  it("accepts item data props", () => {
    const wrapper = mount(<ShoppingRegion data={data***REMOVED*** />);
    expect(wrapper.props().data).toEqual(data);
***REMOVED***);
***REMOVED***);
