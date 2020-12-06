/* eslint-disable no-unused-vars***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TotalSalesSpan = styled.span`
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
`;

function SellerSales(props) {
  const { data ***REMOVED*** = props;
  return (
    <a href="TO DO">
      <TotalSalesSpan>
        {data.total_sales***REMOVED***
        sales
      </TotalSalesSpan>
    </a>
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
