/* eslint-disable no-unused-vars***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';

function Seller(props) {
  const { data ***REMOVED*** = props;
  return (
    <div className="seller">
      <p>
        {data.seller_name***REMOVED***
      </p>
      <div>
        <a href="TO DO">
          <span>
            {data.total_sales***REMOVED***
            sales
          </span>
        </a>
        <span>|</span>
        <span>
          <a href="TO DO">
            <span>
              star
            </span>
            <span>
              star
            </span>
            <span>
              star
            </span>
            <span>
              star
            </span>
            <span>
              star
            </span>
          </a>
          Seller Star Ratings:
          {data.seller_rating***REMOVED***
        </span>
      </div>
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
