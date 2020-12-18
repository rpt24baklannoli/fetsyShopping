/* eslint-disable jsx-a11y/label-has-associated-control***REMOVED***/
/* eslint-disable no-unused-vars***REMOVED***/
/* eslint-disable import/extensions***REMOVED***/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TruckDiv = styled.div`
  margin-top: 12px;
  align-items: center;
  display: flex;
`;

const TruckImg = styled.img`
  height: 48px;
  width: 48px;
  padding-right: 12px;
`;

const NiceChoiceP = styled.p`
  font-size: 13px;
  font-weight: 300;
`;

function NiceChoice(props) {
  const { data ***REMOVED*** = props;
  return (
    <TruckDiv>
      <TruckImg src="https://festy-images.s3.us-west-1.amazonaws.com/truck.png" alt="truck icon" />
      <NiceChoiceP>
        <strong>
          Nice choice!&nbsp;
        </strong>
        Enjoy free shipping to the US when you spend $35+ at this shop.&nbsp;
      </NiceChoiceP>
    </TruckDiv>
  );
***REMOVED***

export default NiceChoice;

// Props typechecking
NiceChoice.propTypes = {
  data: PropTypes.shape({
    carts_item_is_in: PropTypes.number.isRequired,
    us_free_shipping: PropTypes.bool.isRequired,
***REMOVED***),
***REMOVED***;
