/* eslint-disable no-unused-vars***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TotalSalesA = styled.a`
  font-weight: 300;
  font-size: 13px;
  margin-right: 6px;
  color: black;
  text-decoration: none;
  &: hover {
    text-decoration: underline;
***REMOVED***
`;

/*
  line-height: 18px;
*/

function SellerSales(props) {
  const { data ***REMOVED*** = props;
  return (
    <TotalSalesA href="TO DO">
      {data.total_sales***REMOVED***
      sales
    </TotalSalesA>
  );
***REMOVED***

export default SellerSales;

// Props typechecking
SellerSales.propTypes = {
  data: PropTypes.shape({
    total_sales: PropTypes.number.isRequired,
    seller_rating: PropTypes.number.isRequired,
    seller_name: PropTypes.string.isRequired,
***REMOVED***),
***REMOVED***;
