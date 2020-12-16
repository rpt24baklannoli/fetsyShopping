/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import BuyBox from './buyBox.jsx';
import FreeShippingBundle from './freeShippingBundle.jsx';

const CartColDiv = styled.div`
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 3;
  flex-shrink: 1;

  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 19.6px;

  margin-bottom: 36px;
  padding-right: 30px;

  width: 460px;

  text-size-adjust: 100%;
`;

/*
  height: 1176px;

*/

class CartCol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceData: { recommendedItemImages: ['image1', 'image2'] },
      itemId: 1,
    };
  }

  componentDidMount() {
    const { itemData, itemId } = this.state;
    this.getURL();
    //  this.getData(itemId);
  }

  getURL() {
    const currentURL = window.location;
    const itemId = currentURL.pathname.split('/')[2];
    this.setState({ itemId },
      () => this.getData(itemId));
  }

  getData(itemId) {
    axios.get(`/shopping/items/${itemId}`)
      .then((response) => {
        this.setState({ serviceData: response.data });
        console.log('state:', this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { serviceData } = this.state;
    return (
      <CartColDiv>
        <BuyBox data={serviceData} />

      </CartColDiv>
    );
  }
}

/*
        <FreeShippingBundle data={serviceData} />
*/
export default CartCol;
