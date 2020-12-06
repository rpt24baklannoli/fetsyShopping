/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NameBestSellerDiv = styled.div`
  height: 186.738px;
  margin-bottom: 12px;
  width: 413.848px;
  -webkit-font-smoothing: antialiased;
`;

const NameDiv = styled.div`
  height: 156.25px;
  margin-bottom: 0px;
  width: 413.848px;
  -webkit-font-smoothing antialiased;
`;

const NameH1 = styled.h1`
  font-family: Guardian-EgypTT, serif;
  font-size: 26px;
  font-weight: 300;
  height: 156.25px;
  letter-spacing: 0.35px;
  line-height: 32px;
  margin-block-end: 6px;
  margin-block-start: 0px;
  margin-bottom: 6px;
  margin-inline-end: 0px;
  margin-inline-start: 0px;
  overflow-wrap: break-word;
  width: 413.848px;
  word-break: break-word;
`;

const BestSellerOuterSpan = styled.span`
  background-attachment: scroll;
  background-clip: border-box
  background-color: rgb(253, 235, 210);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-sizing: border-box;
  color: rgb(34, 34, 34);
  display: inline-block;
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
  height: 24.4922px;
  line-height: 13px;
  margin-bottom: 0px;
  min-width: 25px;
  padding-bottom: 6px;
  padding-left: 9px;
  padding-right: 9px;
  padding-top: 6px;
  text-align: left;
  text-size-adjust: 100%;
  width: 78.4766px;
  word-break: break-word;
  -webkit-font-smoothing: antialiased;
`;

const BestSellerDiv = styled.div`
  align-items: center;
  box-sizing: border-box;
  color: rgb(34, 34, 34);
  display: flex;
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
  height: 12.5px;
  line-height: 13px;
  margin-bottom: 0px;
  text-align: left;
  text-size-adjust: 100%;
  width: 60.5078px;
  word-break: break-word;
  -webkit-font-smoothing: antialiased;
`;

const BestSellerSpan = styled.span`
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(253, 235, 210);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat-x;
  background-repeat-y;
  background-size: auto;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-sizing: border-box;
  color: rgb(34, 34, 34);
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  height: 24.4922px;
  line-height: 13px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  min-width: 25px;
  padding-bottom: 6px;
  padding-left: 9px;
  padding-right: 9px;
  padding-top: 6px;
  text-align: left;
  text-size-adjust: 100%;
  width: 78.4766px;
  word-break: break-word;
`;

function NameBestSeller(props) {
  const { data } = props;
  return (
    <NameBestSellerDiv>
      <NameDiv>
        <NameH1>
          {data.item_name}
        </NameH1>
      </NameDiv>
      <BestSellerOuterSpan>
        <BestSellerDiv>
          <BestSellerSpan>
            Best Seller:
            {`${data.best_seller}`}
          </BestSellerSpan>
        </BestSellerDiv>
      </BestSellerOuterSpan>
    </NameBestSellerDiv>
  );
}

// Props typechecking
NameBestSeller.propTypes = {
  data: PropTypes.shape({
    best_seller: PropTypes.bool.isRequired,
    carts_item_is_in: PropTypes.number.isRequired,
    in_stock: PropTypes.bool.isRequired,
    item_id: PropTypes.number.isRequired,
    item_name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    price_reduction: PropTypes.string.isRequired,
    us_free_shipping: PropTypes.bool.isRequired,
  }),
};

export default NameBestSeller;
