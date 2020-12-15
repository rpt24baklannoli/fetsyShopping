/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NameBestSellerDiv = styled.div`
  margin-bottom: 12px;
`;

const NameH1 = styled.h1`
  font-family: Guardian-EgypTT, serif;
  font-size: 26px;
  font-weight: 100;
  letter-spacing: 0.35px;
  line-height: 32px;
  overflow-wrap: break-word;
  word-break: break-word;
`;

const BestSellerDiv = styled.div`
  align-items: center;
  display: flex;
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  height: 12.5px;
  text-size-adjust: 100%;
`;

const BestSellerSpan = styled.span`
  background-color: rgb(253, 235, 210);
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
  min-width: 25px;
  padding-bottom: 6px;
  padding-left: 9px;
  padding-right: 9px;
  padding-top: 6px;
`;

function NameBestSeller(props) {
  const { data } = props;
  let bestSeller;
  if (data.best_seller) {
    bestSeller = (
      <BestSellerDiv>
        <BestSellerSpan>
          Bestseller
        </BestSellerSpan>
      </BestSellerDiv>

    );
  }
  return (
    <NameBestSellerDiv>
      <NameH1>
        {data.item_name}
      </NameH1>
      {bestSeller}
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
