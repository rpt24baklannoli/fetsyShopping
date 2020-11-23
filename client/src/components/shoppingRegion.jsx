import React from 'react';
import PropTypes from 'prop-types';

function ShoppingRegion(props) {
  const { data } = props;
  return (
    <div>
      <h3>
        Shopping Region Component
        Item #
        {data.item_id}
      </h3>
      <p>
        Item Name:
        {data.item_name}
      </p>
      <p>
        Best Seller?
        {`${data.best_seller}`}
      </p>
      <p>
        Price:
        {data.price}
      </p>
      <p>
        Price Reduced By:
        {data.price_reduction}
      </p>
      <p>
        In Stock?
        {`${data.in_stock}`}
      </p>
      <p>**Color Dropdown**</p>
      <p>**Quantity Dropdown**</p>
      <p>**Add to Cart Button**</p>
      <p>
        In How Many Carts:
        {data.carts_item_is_in}
      </p>
      <p>
        Free Shipping In The US?
        {`${data.us_free_shipping}`}
      </p>
    </div>
  );
}

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
  }),
};
