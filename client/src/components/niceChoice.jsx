/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import truckImg from '../icons/truck.png';

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
  const { data } = props;
  return (
    <TruckDiv>
      <TruckImg src={truckImg} alt="truck icon" />
      <NiceChoiceP>
        <strong>
          Nice choice!&nbsp;
        </strong>
        Enjoy free shipping to the US when you spend $35+ at this shop.&nbsp;
      </NiceChoiceP>
    </TruckDiv>
  );
}

export default NiceChoice;

// Props typechecking
NiceChoice.propTypes = {
  data: PropTypes.shape({
    carts_item_is_in: PropTypes.number.isRequired,
    us_free_shipping: PropTypes.bool.isRequired,
  }),
};
