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
  box-sizing: border-box;
  color: rgb(34, 34, 34);
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 3;
  flex-shrink: 1;
  float: right;
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 14px;
  height: 1142.09px;
  line-height: 19.6px;
  margin-bottom: 36px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-left: 0px;
  padding-right: 30px;
  order: 2;
  text-align: left;
  text-size-adjust: 100%;
  width: 300.703px;
`;

class CartCol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceData: { recommendedItemImages: ['image1', 'image2'] },
      itemId: 1,
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { itemData, itemId } = this.state;
    this.getURL();
    //  this.getData(itemId);
  }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit(event) {
  //   const { value } = this.state;
  //   console.log(`An essay was submitted: ${value}`);
  //   event.preventDefault();
  // }

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
        <FreeShippingBundle data={serviceData} />
      </CartColDiv>
    );
  }
}

export default CartCol;
