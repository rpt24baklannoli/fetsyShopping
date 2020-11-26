/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Seller from './seller.jsx';
import NameBestSeller from './nameBestSeller.jsx';
import PriceInStock from './priceInStock.jsx';
import ShoppingRegion from './shoppingRegion.jsx';

const BuyBoxDiv = styled.div`
  display: block;
  height: 729.98px;
  margin-bottom: 0px;
  width: 270.703px;
`;

function BuyBox(props) {
  const { data } = props;
  return (
    <BuyBoxDiv>
      <Seller data={data} />
      <NameBestSeller data={data} />
      <PriceInStock data={data} />
      <ShoppingRegion data={data} />
    </BuyBoxDiv>
  );
}

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
  }),
};

export default BuyBox;
