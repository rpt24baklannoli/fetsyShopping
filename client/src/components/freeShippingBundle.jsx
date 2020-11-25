/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './itemList.jsx';

function FreeShippingBundle(props) {
  const { data } = props;
  return (
    <div className="freeShippingBundle">
      <h1>Buy together, get free shipping</h1>
      <ItemList data={data} />

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
    </div>
  );
}

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
  }),
};
