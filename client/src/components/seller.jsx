/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function Seller(props) {
  const { data } = props;
  return (
    <div>
      <h3>Seller Component</h3>
      <p>
        Seller Name:
        {data.seller_name}
      </p>
      <p>
        Seller Total Sales:
        {data.total_sales}
      </p>
      <p>
        Seller Star Ratings:
        {data.seller_rating}
      </p>
    </div>
  );
}

export default Seller;

// Props typechecking
Seller.propTypes = {
  data: PropTypes.shape({
    total_sales: PropTypes.number.isRequired,
    seller_rating: PropTypes.number.isRequired,
    seller_name: PropTypes.string.isRequired,
  }),
};
