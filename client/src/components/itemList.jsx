/* eslint-disable import/extensions***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import Listing from './listing.jsx';

function ItemList(props) {
  const { data ***REMOVED*** = props;
  return (
    <div>
      <Listing data={data.recommendedItemImages[0]***REMOVED*** />
      <Listing data={data.recommendedItemImages[1]***REMOVED*** />
      <Listing data={data.recommendedItemImages[2]***REMOVED*** />
    </div>
  );
***REMOVED***

export default ItemList;

// Props typechecking
ItemList.propTypes = {
  data: PropTypes.shape({
    recommendedItemImages: PropTypes.arrayOf.isRequired,
***REMOVED***),
***REMOVED***;
