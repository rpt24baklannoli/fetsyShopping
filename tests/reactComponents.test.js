import React from 'react';
import { shallow, mount, render ***REMOVED*** from 'enzyme';

import CartCol from '../client/src/components/cartCol.jsx';
import BuyBox from '../client/src/components/buyBox.jsx';
import ShoppingRegion from '../client/src/components/shoppingRegion.jsx';
import Seller from '../client/src/components/seller.jsx';

//## UNIT TESTING REACT COMPONENTS (USING ENZYME)

describe('React components render correctly - testing', () => {

  test('CartCol renders without crashing', () => {
    shallow(<CartCol />);
***REMOVED***);

  // This test will need to be modified once react componenets are
  // correctly rendered
  test("BuyBox renders component header", () => {
    const wrapper = shallow(<BuyBox />);
    const header = <h2>BuyBox Component</h2>;
    expect(wrapper.contains(header)).toEqual(true);
***REMOVED***);

***REMOVED***)

describe('Props are being passed down correctly - testing', () => {

  const data = {
    item_id: 10,
    item_name: 'consequat aute laboris eiusmod velit dolore pariatur ut commodo ',
    best_seller: true,
    price: '85.01',
    price_reduction: '69.97',
    in_stock: false,
    us_free_shipping: true,
    carts_item_is_in: 4,
    seller_id: 10,
    seller_rating: 3,
    total_sales: 1012,
    seller_name: 'Kylie60',
    seller_city: 'Lake Botown',
    seller_state: 'Massachusetts',
    on_etsy_since: 2019
***REMOVED***

  test("shopping region accepts serviceData props", () => {
    const wrapper = mount(<ShoppingRegion data={data***REMOVED*** />);
    expect(wrapper.props().data).toEqual(data);
***REMOVED***);

  test("seller component accepts serviceData props", async () => {
    const wrapper = mount(<Seller data={data***REMOVED*** />);
    expect(wrapper.props().data).toEqual(data);
***REMOVED***);
***REMOVED***);
