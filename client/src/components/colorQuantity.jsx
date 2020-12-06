/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
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
  const { data } = props;
  return (
    <ColorQuantityDiv>
      <Color data={data} />
      <Quantity data={data} />
    </ColorQuantityDiv>
  );
}

export default ColorQuantity;

// Props typechecking
ColorQuantity.propTypes = {
  data: PropTypes.shape({
    total_sales: PropTypes.number.isRequired,
    seller_rating: PropTypes.number.isRequired,
    seller_name: PropTypes.string.isRequired,
  }),
};
