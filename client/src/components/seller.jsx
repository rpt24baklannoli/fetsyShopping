/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SellerName from './sellerName.jsx';
import SellerSales from './sellerSales.jsx';
import SellerRating from './sellerRating.jsx';

const SellerDiv = styled.div`
  font-size: 14px;
`;

const SalesStarRatingDiv = styled.div`
  font-size: 14px;
  margin-bottom: 12px;
`;

function Seller(props) {
  const { data } = props;
  return (
    <SellerDiv>
      <SellerName data={data} />
      <SalesStarRatingDiv>
        <SellerSales data={data} />
        <span>|</span>
        <SellerRating data={data} />
      </SalesStarRatingDiv>
    </SellerDiv>
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
