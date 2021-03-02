/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Listing from './listing.jsx';

function ItemList(props) {
  const { data } = props;
  return (
    <div>
      <Listing data={data.recommendedItemImages[0]} />
      <Listing data={data.recommendedItemImages[1]} />
      <Listing data={data.recommendedItemImages[2]} />
    </div>
  );
}

export default ItemList;

// Props typechecking
ItemList.propTypes = {
  data: PropTypes.shape({
    recommendedItemImages: PropTypes.arrayOf.isRequired,
  }),
};
