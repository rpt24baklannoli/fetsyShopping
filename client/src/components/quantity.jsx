/* eslint-disable jsx-a11y/label-has-associated-control***REMOVED***/
/* eslint-disable no-unused-vars***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuantityDiv = styled.div`
  display: block;
  height: 71.4844px;
  margin-bottom: 12px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 431.992px;
`;

const QuantityLabel = styled.label`
  cursor: default;
  display: block;
  font-size: 13px;
  font-weight: 300;
  height: 17.5px
  line-height: 18px;
  margin-bottom: 6px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 431.992px;
`;

const QuantitySelect = styled.select`
  background-color:red;
  align-items: center;
  appearance: none;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(255, 255, 255);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto;
  border-bottom-color: rgba(34, 34, 34, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 1.25px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color:rgba(34, 34, 34, 0.15);
  border-left-style: solid;
  border-left-width: 1.25px;
  border-right-color: rgba(34, 34, 34, 0.15);
  border-right-style: solid;
  border-right-width: 1.25px;
  border-top-color: rgba(34, 34, 34, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 1.25px;
  box-shadow: rgba(34, 34, 34, 0.15) 0px 1px 6px 0px;
  box-sizing: border-box;
  color: rgb(34, 34, 34);
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-stretch: 100%;
  font-style: normal;
  font-weight: 400;
  height: 47.9883px;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  overflow-x: visible;
  overflow-y: visible;
  padding-left: 12px;
  padding-right: 36px;
  text-align: start;
  text-indent: 0.01px;
  text-overflow: clip;
  text-rendering: auto;
  text-shadow: none;
  text-size-adjust: 100%;
  text-transform: none;
  transition-delay: 0s, 0s;
  transition-duration: 0.2s, 0.2s;
  transition-property: border-color, box-shadow;
  transition-timing-function: ease-out, ease-out;
  white-space: pre
  width: 431.992px
  word-spacing: 0px
  writing-mode: horizontal-tb
`;

function Quantity(props) {
  const { data ***REMOVED*** = props;
  return (
    <QuantityDiv>
      <QuantityLabel htmlFor="quantity-select">Quantity</QuantityLabel>
      <QuantitySelect name="quantity" id="quantity-select">
        <option value="1" selected>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </QuantitySelect>
    </QuantityDiv>
  );
***REMOVED***

export default Quantity;

// Props typechecking
Quantity.propTypes = {
  data: PropTypes.shape({
    total_sales: PropTypes.number.isRequired,
    seller_rating: PropTypes.number.isRequired,
    seller_name: PropTypes.string.isRequired,
***REMOVED***),
***REMOVED***;
