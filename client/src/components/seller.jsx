/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const SellerNameP = styled.p`
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
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

const TotalSalesSpan = styled.span`
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
`;

const StarsRatingSpan = styled.span`
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

function Seller(props) {
  const { data } = props;
  return (
    <SellerDiv>
      <SellerNameP>
        {data.seller_name}
      </SellerNameP>
      <SalesStarRatingDiv>
        <a href="TO DO">
          <TotalSalesSpan>
            {data.total_sales}
            sales
          </TotalSalesSpan>
        </a>
        <span>|</span>
        <StarsRatingSpan>
          <a href="TO DO">
            <StarSpan>
              *
            </StarSpan>
            <StarSpan>
              *
            </StarSpan>
            <StarSpan>
              *
            </StarSpan>
            <StarSpan>
              *
            </StarSpan>
            <StarSpan>
              *
            </StarSpan>
          </a>
          Stars:
          {data.seller_rating}
        </StarsRatingSpan>
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
