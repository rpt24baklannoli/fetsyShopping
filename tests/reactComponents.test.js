import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CartCol from '../client/src/components/cartCol.jsx';
import NameBestSeller from '../client/src/components/nameBestSeller.jsx';
import FreeShippingBundle from '../client/src/components/freeShippingBundle.jsx';
import Seller from '../client/src/components/seller.jsx';

//## UNIT TESTING REACT COMPONENTS (USING ENZYME)

describe('React components render correctly - testing', () => {

  test('CartCol renders without crashing', () => {
    shallow(<CartCol />);
  });

  // This test needs to be modified. BuyBox no longer has a header.
  test("NameBestSeller renders component span", () => {
    const wrapper = shallow(<NameBestSeller />);
    const span = <BestSellerSpan>Bestseller</BestSellerSpan>;
    expect(wrapper.contains(span)).toEqual(true);
  });



})

describe('Props are being passed down correctly - testing', () => {

  const data = {
    best_seller: false,
    carts_item_is_in: 20,
    in_stock: false,
    item_id: 2,
    item_name: "tea monitor drink dollar cat to bed artisan dollar ",
    on_etsy_since: 2020,
    price: "94.33",
    price_reduction: "44.79",
    recommendedItemImages: [
      {item_id: 3, image_url: "https://festy-images.s3-us-west-1.amazonaws.com/3_003.jpg", item_name: "bed blue warming ", price: "23.08"},
      {item_id: 5, image_url: "https://festy-images.s3-us-west-1.amazonaws.com/5_001.jpg", item_name: "glass glass cloth alcohol cat drink glass sport ball plant ", price: "80.55"},
      {item_id: 5, image_url: "https://festy-images.s3-us-west-1.amazonaws.com/5_001.jpg", item_name: "glass glass cloth alcohol cat drink glass sport ball plant ", price: "80.55"}
    ],
    seller_city: "West Jasmin",
    seller_id: 3,
    seller_name: "Drake.Raynor9",
    seller_rating: 3,
    seller_state: "Kansas",
    total_sales: 562,
    us_free_shipping: true
  }

  test("freeShippingBundle accepts serviceData props", () => {
    const wrapper = mount(<FreeShippingBundle data={data} />);
    expect(wrapper.props().data).toEqual(data);
  });

  test("seller component accepts serviceData props", async () => {
    const wrapper = mount(<Seller data={data} />);
    expect(wrapper.props().data).toEqual(data);
  });
});
