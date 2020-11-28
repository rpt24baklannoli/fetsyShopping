/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SellerRatingSpan = styled.span`
  box-sizing: border-box;
  color: rgb(34, 34, 34);
  cursor: pointer;
  display: inline;
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 14px;
  height: auto;
  line-height: 19.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  text-align: left;
  text-size-adjust: 100%;
  width: auto;
  -webkit-font-smoothing: antialiased;
`;

const StarSpan = styled.span`
  bottom: 2px;
  box-sizing: border-box;
  color: rgb(34, 34, 34);
  cursor: pointer;
  display: inline-block;
  fill: rgb(34, 34, 34);
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 14px;
  height: 11.9922px;
  line-height: 19.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  position: relative;
  text-align: left;
  text-size-adjust: 100%;
  vertical-align: middle;
  width: 11.9922px;
  -webkit-font-smoothing: antialiased;
`;

function SellerRating(props) {
  const { data } = props;
  const stars = [...Array(data.seller_rating)].map((star) => <StarSpan>*</StarSpan>);

  return (
    <SellerRatingSpan>
      <a href="TO DO">
        {stars}
      </a>
      Stars:
      {data.seller_rating}
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
