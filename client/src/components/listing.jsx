/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Listing(props) {
  const { data } = props;
  return (
    <div>
      <div>
        <span>This listing</span>
        <img src={`${data.recommendedItemImages[1].image_url}`} alt="random" />
      </div>
      <div>
        <h3>Item name</h3>
        <p>Item price</p>
      </div>
    </div>
  );
}

export default Listing;

/*
<span>*Image here img tag*</span>
<img src={`${props.data.recommendedItemImages[0]}`} alt="random" />
*/

// Props typechecking
Listing.propTypes = {
  data: PropTypes.shape({
    recommendedItemImages: PropTypes.string.isRequired,
  }),
};
