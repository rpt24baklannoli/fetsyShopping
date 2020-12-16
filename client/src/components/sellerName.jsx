/* eslint-disable no-unused-vars***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SellerNameA = styled.a`
  color: black;
  font-size: 16px;
  text-decoration: none;
  &: hover {
    text-decoration: underline;
***REMOVED***
`;

function SellerName(props) {
  const { data ***REMOVED*** = props;
  return (
    <SellerNameA href="TODO">
      {data.seller_name***REMOVED***
    </SellerNameA>
  );
***REMOVED***

export default SellerName;

// Props typechecking
SellerName.propTypes = {
  data: PropTypes.shape({
    total_sales: PropTypes.number.isRequired,
    seller_rating: PropTypes.number.isRequired,
    seller_name: PropTypes.string.isRequired,
***REMOVED***),
***REMOVED***;
