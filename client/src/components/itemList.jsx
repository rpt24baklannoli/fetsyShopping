/* eslint-disable import/extensions***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import Listing from './listing.jsx';

function ItemList(props) {
  const { data ***REMOVED*** = props;
  return (
    <div>
      <h3>Item List Component</h3>
      <p>Buy together, get free shipping</p>
      <Listing data={data***REMOVED*** />
      <Listing data={data***REMOVED*** />
      <Listing data={data***REMOVED*** />
    </div>
  );
***REMOVED***

export default ItemList;

// Props typechecking
ItemList.propTypes = {
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
