/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from './color.jsx';
import Quantity from './quantity.jsx';

function ColorQuantity(props) {
  const { data } = props;
  return (
    <div>
      <Color data={data} />
      <Quantity data={data} />
    </div>
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
