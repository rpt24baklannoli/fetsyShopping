/* eslint-disable import/extensions***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemList from './itemList.jsx';
import AddSeeItemsButtons from './addSeeItemsButtons.jsx';

const FreeShippingBundleDiv = styled.div`
  margin-top: 36px;
`;

const TitleH1 = styled.h1`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
`;

function FreeShippingBundle(props) {
  const { data ***REMOVED*** = props;
  return (
    <FreeShippingBundleDiv>
      <TitleH1>Buy together, get free shipping</TitleH1>
      <ItemList data={data***REMOVED*** />
      <AddSeeItemsButtons />
    </FreeShippingBundleDiv>
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
