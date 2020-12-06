/* eslint-disable import/extensions***REMOVED***/
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Seller from './seller.jsx';
import NameBestSeller from './nameBestSeller.jsx';
import PriceInStock from './priceInStock.jsx';
import ColorQuantity from './colorQuantity.jsx';
import ShoppingRegion from './shoppingRegion.jsx';

const BuyBoxDiv = styled.div`
  display: block;
  height: 729.98px;
  margin-bottom: 0px;
  width: 270.703px;
`;

function BuyBox(props) {
  const { data ***REMOVED*** = props;
  return (
    <BuyBoxDiv>
      <Seller data={data***REMOVED*** />
      <NameBestSeller data={data***REMOVED*** />
      <PriceInStock data={data***REMOVED*** />
      <ColorQuantity data={data***REMOVED*** />
      <ShoppingRegion data={data***REMOVED*** />
    </BuyBoxDiv>
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
