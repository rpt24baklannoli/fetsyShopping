/* eslint-disable no-undef***REMOVED***/
/* eslint-disable import/extensions***REMOVED***/
/* eslint-disable jsx-a11y/label-has-associated-control***REMOVED***/
/* eslint-disable no-unused-vars***REMOVED***/
/* eslint-disable no-console***REMOVED***/
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
      serviceData: { recommendedItemImages: ['image1', 'image2'] ***REMOVED***,
      itemId: 1,
  ***REMOVED***;
***REMOVED***

  componentDidMount() {
    const { itemData, itemId ***REMOVED*** = this.state;
    this.getURL();
    //  this.getData(itemId);
***REMOVED***

  getURL() {
    const currentURL = window.location;
    const itemId = currentURL.pathname.split('/')[2];
    this.setState({ itemId ***REMOVED***,
      () => this.getData(itemId));
***REMOVED***

  getData(itemId) {
    axios.get(`/shopping/items/${itemId***REMOVED***`)
      .then((response) => {
        this.setState({ serviceData: response.data ***REMOVED***);
        console.log('state:', this.state);
    ***REMOVED***)
      .catch((error) => {
        console.log(error);
    ***REMOVED***);
***REMOVED***

  render() {
    const { serviceData ***REMOVED*** = this.state;
    return (
      <CartColDiv>
        <BuyBox data={serviceData***REMOVED*** />

      </CartColDiv>
    );
***REMOVED***
***REMOVED***

/*
        <FreeShippingBundle data={serviceData***REMOVED*** />
*/
export default CartCol;
