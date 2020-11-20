/* eslint-disable import/extensions***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './itemList.jsx';

function FreeShippingBundle(props) {
  const { data ***REMOVED*** = props;
  return (
    <div>
      <h2>FreeShippingBundle Component</h2>
      <ItemList data={data***REMOVED*** />
      <p>Add 3 items to cart</p>
      <p>***See more items button***</p>
    </div>
  );
***REMOVED***

export default FreeShippingBundle;

// Props typechecking
FreeShippingBundle.propTypes = {
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
