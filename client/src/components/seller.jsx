/* eslint-disable import/extensions***REMOVED***/
/* eslint-disable no-unused-vars***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SellerName from './sellerName.jsx';
import SellerSales from './sellerSales.jsx';
import SellerRating from './sellerRating.jsx';

const SellerDiv = styled.div`
  margin: 0;
  box-sizing: border-box;
  display: block;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-size: 14px;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  --vh: 12.51px;
  text-align: left;
`;

const SalesStarRatingDiv = styled.div`
  box-sizing: border-box;
  color: rgb(34, 34, 34);
  display: block;
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 14px;
  height: 31.3672px;
  line-height: 19.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  text-align: left;
  text-size-adjust: 100%;
  width: 413.848px;
  -webkit-font-smoothing: antialiased;
`;

function Seller(props) {
  const { data ***REMOVED*** = props;
  return (
    <SellerDiv>
      <SellerName data={data***REMOVED*** />
      <SalesStarRatingDiv>
        <SellerSales data={data***REMOVED*** />
        <span>|</span>
        <SellerRating data={data***REMOVED*** />
      </SalesStarRatingDiv>
    </SellerDiv>
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
