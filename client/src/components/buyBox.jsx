/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Seller from './seller.jsx';
import ShoppingRegion from './shoppingRegion.jsx';

function BuyBox(props) {
  const { data } = props;
  return (
    <div className="buyBox">
      <Seller data={data} />
      <ShoppingRegion data={data} />
    </div>
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
