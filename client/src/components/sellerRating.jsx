/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SellerRatingSpan = styled.span`
  display: inline;
  font-size: 14px;
  margin-left: 6px;
`;

const StarImg = styled.img`
  bottom: 2px;
  display: inline-block;
  height: 12px;
  position: relative;
  vertical-align: middle;
  width: 12px;
`;

function SellerRating(props) {
  const { data } = props;
  const stars = [...Array(data.seller_rating)].map((star) => <StarImg src="https://festy-images.s3.us-west-1.amazonaws.com/star.png" alt="star icon" />);

  return (
    <SellerRatingSpan>
      <a href="TO DO">
        {stars}
      </a>
    </SellerRatingSpan>
  );
}

export default SellerRating;

// Props typechecking
SellerRating.propTypes = {
  data: PropTypes.shape({
    total_sales: PropTypes.number.isRequired,
    seller_rating: PropTypes.number.isRequired,
    seller_name: PropTypes.string.isRequired,
  }),
};
