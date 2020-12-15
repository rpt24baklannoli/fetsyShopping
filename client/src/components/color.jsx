/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorDiv = styled.div`
  display: block;
  margin-bottom: 12px;
`;

const ColorLabel = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 300;
  line-height: 18px;
  margin-bottom: 6px;
`;

const ColorSelect = styled.select`
  align-items: center;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(255, 255, 255);
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
  height: 40px;
  width: 100%;
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
  &:hover {
    transition-delay: 0s, 0s;
    transition-duration: 0.2s, 0.2s;
    transition-property: border-color, box-shadow;
    border-color: rgba(34, 34, 34, 0.7);
    box-shadow: rgba(34, 34, 34, 0.15) 0px 1px 6px 0px;
    transition-timing-function: ease-out, ease-out;
  }
  white-space: pre
  word-spacing: 0px
  writing-mode: horizontal-tb
`;

function Color(props) {
  const { data } = props;
  return (
    <ColorDiv>
      <ColorLabel htmlFor="color-select">Primary Color</ColorLabel>
      <ColorSelect name="colors">
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="Violet">Violet</option>
        <option value="Indigo">Indigo</option>
      </ColorSelect>
    </ColorDiv>
  );
}

export default Color;

// Props typechecking
Color.propTypes = {
  data: PropTypes.shape({
    total_sales: PropTypes.number.isRequired,
    seller_rating: PropTypes.number.isRequired,
    seller_name: PropTypes.string.isRequired,
  }),
};
