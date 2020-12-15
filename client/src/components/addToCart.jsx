/* eslint-disable jsx-a11y/label-has-associated-control***REMOVED***/
/* eslint-disable no-unused-vars***REMOVED***/
/* eslint-disable import/extensions***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AddToCartButton = styled.button`

  background-color: black;

  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;

  border-left-color: rgb(255, 255, 255);

  border-right-color: rgb(255, 255, 255);

  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 16px;

  font-weight: 700;
  height: 48px;

  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 100%;

  &:hover {
    transform: scale(1.02);
    background-color: rgb(34, 34, 34);
    transition-duration: 0.2s, 0.15s, 0.2s;
***REMOVED***
`;

function AddToCart() {
  return (
    <div>
      <AddToCartButton type="submit">Add to cart</AddToCartButton>
    </div>
  );
***REMOVED***

export default AddToCart;
