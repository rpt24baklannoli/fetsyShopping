/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddItemsButton = styled.button`
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  align-items: flex-start;
  appearance: none;
  border-color: rgb(34, 34, 34);
  border-radius: 24px 24px 24px 24px;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-stretch: 100%;
  font-weight: 700;
  height: 48px;
  letter-spacing: normal;
  line-height: 24px;
  min-height: 48px;
  min-width: 48px;
  outline-color: rgb(34, 34, 34);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
  position: relative;
  text-align: center;
  text-size-adjust: 100%;
  text-transform: none;
  vertical-align: middle;
  &:hover {
    transform: matrix(1, 1.74533e-06, -1.74533e-06, 1, 0, 0);
    transition-delay: 0s, 0s, 0s;
    transition-duration: 0.2s, 0.15s, 0.2s;
    transition-property: transform, background, box-shadow;
    transform: scale(1.01);
    box-shadow: 0px 9px 30px -6px rgba(0,0,0,0.46);
    transition-timing-function: cubic-bezier(0.345, 0.115, 0.135, 1.42), ease-out, ease-out;
  }
`;

const SeeMoreItemsA = styled.a`
  background-image: url("https://festy-images.s3.us-west-1.amazonaws.com/arrow.png");
  background-repeat: no-repeat;
  background-size: 3%;
  background-position: 68%;
  margin-top: 18px;
  text-decoration: none;
  color: rgb(34, 34, 34);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 22.4px;
  text-align: center;
  &:hover {
    transition-delay: 0s;
    transition-duration: 0.1s;
    transition-property: background-position;
    transition-timing-function: ease-in-out;
    background-position: 71%;
  }
`;

function AddSeeItemsButtons() {
  return (
    <ButtonsDiv>
      <AddItemsButton type="submit">Add 3 items to cart</AddItemsButton>
      <SeeMoreItemsA href="filler">See more items</SeeMoreItemsA>
    </ButtonsDiv>
  );
}

export default AddSeeItemsButtons;

// Props typechecking
AddSeeItemsButtons.propTypes = {
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
