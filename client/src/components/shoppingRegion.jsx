import React from 'react';
import PropTypes from 'prop-types';

function ShoppingRegion(props) {
  const { data ***REMOVED*** = props;
  return (
    <div>
      <h3>Shopping Region Component</h3>
      <p>
        Item Name:
        {data.item_name***REMOVED***
      </p>
      <p>
        Best Seller?
        {`${data.best_seller***REMOVED***`***REMOVED***
      </p>
      <p>
        Price:
        {data.price***REMOVED***
      </p>
      <p>
        Price Reduced By:
        {data.price_reduction***REMOVED***
      </p>
      <p>
        In Stock?
        {`${data.in_stock***REMOVED***`***REMOVED***
      </p>
      <p>**Color Dropdown**</p>
      <p>**Quantity Dropdown**</p>
      <p>**Add to Cart Button**</p>
      <p>
        In How Many Carts:
        {data.carts_item_is_in***REMOVED***
      </p>
      <p>
        Free Shipping In The US?
        {`${data.us_free_shipping***REMOVED***`***REMOVED***
      </p>
    </div>
  );
***REMOVED***

export default ShoppingRegion;

// Props typechecking
ShoppingRegion.propTypes = {
  data: PropTypes.shape({
    best_seller: PropTypes.bool.isRequired,
    carts_item_is_in: PropTypes.number.isRequired,
    in_stock: PropTypes.bool.isRequired,
    item_id: PropTypes.number.isRequired,
    item_name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    price_reduction: PropTypes.string.isRequired,
    us_free_shipping: PropTypes.bool.isRequired,
***REMOVED***),
***REMOVED***;
