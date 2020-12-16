/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cartImg from '../icons/cart.png';

const CartDiv = styled.div`
  margin-top: 12px;
  align-items: center;
  display: flex;
`;

const CartImg = styled.img`
  height: 48px;
  width: 48px;
  padding-right: 12px;
`;

const OtherPeopleP = styled.p`
  font-size: 13px;
  font-weight: 300;
`;

function OtherPeople(props) {
  const { data } = props;
  return (
    <CartDiv>
      <CartImg src={cartImg} alt="cart icon" />
      <OtherPeopleP>
        <strong>
          Other people want this.&nbsp;
        </strong>
        Over&nbsp;
        {data.carts_item_is_in}
        &nbsp;people have this in their carts right now.
      </OtherPeopleP>
    </CartDiv>
  );
}

export default OtherPeople;

// Props typechecking
OtherPeople.propTypes = {
  data: PropTypes.shape({
    carts_item_is_in: PropTypes.number.isRequired,
  }),
};
