/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OtherPeople from './otherPeople.jsx';
import NiceChoice from './niceChoice.jsx';

function DataNudger(props) {
  const { data } = props;

  let freeShipping;
  if (data.us_free_shipping) {
    freeShipping = (
      <NiceChoice data={data} />
    );
  }

  return (
    <div>
      <OtherPeople data={data} />
      {freeShipping}
    </div>
  );
}

export default DataNudger;

// Props typechecking
DataNudger.propTypes = {
  data: PropTypes.shape({
    us_free_shipping: PropTypes.bool.isRequired,
  }),
};
