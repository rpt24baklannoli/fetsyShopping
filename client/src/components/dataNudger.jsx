/* eslint-disable jsx-a11y/label-has-associated-control***REMOVED***/
/* eslint-disable no-unused-vars***REMOVED***/
/* eslint-disable import/extensions***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OtherPeople from './otherPeople.jsx';
import NiceChoice from './niceChoice.jsx';

function DataNudger(props) {
  const { data ***REMOVED*** = props;

  let freeShipping;
  if (data.us_free_shipping) {
    freeShipping = (
      <NiceChoice data={data***REMOVED*** />
    );
***REMOVED***

  return (
    <div>
      <OtherPeople data={data***REMOVED*** />
      {freeShipping***REMOVED***
    </div>
  );
***REMOVED***

export default DataNudger;

// Props typechecking
DataNudger.propTypes = {
  data: PropTypes.shape({
    us_free_shipping: PropTypes.bool.isRequired,
***REMOVED***),
***REMOVED***;
