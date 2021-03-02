/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BoxShadowDiv = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    transition-delay: 0s;
    transition-duration: 0.2s;
    transition-property: box-shadow;
    transition-timing-function: ease-in-out;
    box-shadow: 0px 0px 12px -1px rgba(0,0,0,0.73);
  }
`;

const ListingDiv = styled.div`
  margin-bottom: 12px;
  display: flex;
  position: relative;
  text-size-adjust: 100%;
`;

const ImageDiv = styled.div`
  display: flex;
`;

const ImageImg = styled.img`
  width: 145px;
  height: 115px;
  border-radius: 2px;
`;

const InfoDiv = styled.div`
  display: block;
  flex-basis: 66.6667%;
  flex-grow: 1;
  padding-top: 2px;
  padding-left: 12px;
`;

const NameP = styled.p`
  margin: 0px;
  display: block;
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans";
  font-size: 20px;
  font-weight: 300;
  text-overflow: ellipsis;
`;

const PriceP = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

function Listing(props) {
  const { data } = props;
  return (
    <BoxShadowDiv>
      <ListingDiv>
        <ImageDiv>
          <ImageImg src={`${data.image_url}`} alt={`${data.item_name}`} />
        </ImageDiv>
        <InfoDiv>
          <NameP>{data.item_name}</NameP>
          <PriceP>
            $
            {data.price}
          </PriceP>
        </InfoDiv>
      </ListingDiv>
    </BoxShadowDiv>
  );
}

export default Listing;

// Props typechecking
Listing.propTypes = {
  data: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    item_name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};
