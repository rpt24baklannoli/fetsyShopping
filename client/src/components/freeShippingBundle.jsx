/* eslint-disable import/extensions***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemList from './itemList.jsx';

const FreeShippingBundleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 374.121px;
  margin-bottom: 0px;
  margin-left:0px;
  margin-right: 0px;
  margin-top: 36px;
  width: 268.223px;
`;

function FreeShippingBundle(props) {
  const { data ***REMOVED*** = props;
  return (
    <FreeShippingBundleDiv>
      <h1>Buy together, get free shipping</h1>
      <ItemList data={data***REMOVED*** />

      <div>
        <div>
          <form action="filler" method="post">
            <button type="submit">Add 3 items to cart</button>
          </form>
        </div>
        <div>
          <a href="filler">See more items</a>
        </div>
      </div>
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
