/* eslint-disable import/extensions***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import Seller from './seller.jsx';
import NameBestSeller from './nameBestSeller.jsx';
import PriceInStock from './priceInStock.jsx';
import ColorQuantity from './colorQuantity.jsx';
import AddToCart from './addToCart.jsx';
import DataNudger from './dataNudger.jsx';

function BuyBox(props) {
  const { data ***REMOVED*** = props;
  return (
    <div>
      <Seller data={data***REMOVED*** />
      <NameBestSeller data={data***REMOVED*** />
      <PriceInStock data={data***REMOVED*** />
      <ColorQuantity data={data***REMOVED*** />
      <AddToCart />
      <DataNudger data={data***REMOVED*** />
    </div>
  );
***REMOVED***

// Props typechecking
BuyBox.propTypes = {
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

export default BuyBox;
