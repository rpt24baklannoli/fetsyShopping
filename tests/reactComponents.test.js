import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CartCol from '../client/src/components/cartCol.jsx';
import BuyBox from '../client/src/components/buyBox.jsx';
import ShoppingRegion from '../client/src/components/ShoppingRegion.jsx';

//## UNIT TESTING REACT COMPONENTS (USING ENZYME)

describe('React components render correctly - testing', () => {

  test('CartCol renders without crashing', () => {
    shallow(<CartCol />);
  });

  // This test will need to be modified once react componenets are
  // correctly rendered
  test("BuyBox renders component header", () => {
    const wrapper = shallow(<BuyBox />);
    const header = <h2>BuyBox Component</h2>;
    expect(wrapper.contains(header)).toEqual(true);
  });

})

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
  }

  test("accepts item data props", () => {
    const wrapper = mount(<ShoppingRegion data={data} />);
    expect(wrapper.props().data).toEqual(data);
  });
});
