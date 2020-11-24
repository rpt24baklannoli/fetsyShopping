/* eslint-disable no-unused-vars***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';

function Seller(props) {
  const { data ***REMOVED*** = props;
  return (
    <div>
      <h3>Seller Component</h3>
      <p>
        Seller Name:
        {data.seller_name***REMOVED***
      </p>
      <p>
        Seller Total Sales:
        {data.total_sales***REMOVED***
      </p>
      <p>
        Seller Star Ratings:
        {data.seller_rating***REMOVED***
      </p>
    </div>
  );
***REMOVED***

export default Seller;

// Props typechecking
Seller.propTypes = {
  data: PropTypes.shape({
    total_sales: PropTypes.number.isRequired,
    seller_rating: PropTypes.number.isRequired,
    seller_name: PropTypes.string.isRequired,
***REMOVED***),
***REMOVED***;
