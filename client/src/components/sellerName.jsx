/* eslint-disable no-unused-vars***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SellerNameP = styled.p`
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
`;

function SellerName(props) {
  const { data ***REMOVED*** = props;
  return (
    <SellerNameP>
      {data.seller_name***REMOVED***
    </SellerNameP>
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
