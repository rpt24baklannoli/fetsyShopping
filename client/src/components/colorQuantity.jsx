/* eslint-disable jsx-a11y/label-has-associated-control***REMOVED***/
/* eslint-disable no-unused-vars***REMOVED***/
/* eslint-disable import/extensions***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from './color.jsx';
import Quantity from './quantity.jsx';

const ColorQuantityDiv = styled.div`
  display: block;
  height: 154.961px;
  margin-bottom: 18px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 431.992px;
`;

function ColorQuantity(props) {
  const { data ***REMOVED*** = props;
  return (
    <ColorQuantityDiv>
      <Color data={data***REMOVED*** />
      <Quantity data={data***REMOVED*** />
    </ColorQuantityDiv>
  );
***REMOVED***

export default ColorQuantity;

// Props typechecking
ColorQuantity.propTypes = {
  data: PropTypes.shape({
    total_sales: PropTypes.number.isRequired,
    seller_rating: PropTypes.number.isRequired,
    seller_name: PropTypes.string.isRequired,
***REMOVED***),
***REMOVED***;
