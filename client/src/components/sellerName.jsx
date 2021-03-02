/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SellerNameA = styled.a`
  color: black;
  font-size: 16px;
  text-decoration: none;
  &: hover {
    text-decoration: underline;
  }
`;

function SellerName(props) {
  const { data } = props;
  return (
    <SellerNameA href="TODO">
      {data.seller_name}
    </SellerNameA>
  );
}

export default SellerName;

// Props typechecking
SellerName.propTypes = {
  data: PropTypes.shape({
    total_sales: PropTypes.number.isRequired,
    seller_rating: PropTypes.number.isRequired,
    seller_name: PropTypes.string.isRequired,
  }),
};
