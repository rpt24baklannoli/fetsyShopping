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

class CartCol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceData: {
        best_seller: true,
        carts_item_is_in: 20,
        in_stock: true,
        item_id: 1,
        item_name: 'Example Item Name',
        on_etsy_since: 2021,
        price: '99.99',
        price_reduction: '00.00',
        recommendedItemImages: [
          {
            item_id: 2, image_url: 'https://festy-images.s3.us-west-1.amazonaws.com/missing.jpg', item_name: 'Example Item Name', price: '99.99',
   ***REMOVED*****REMOVED***
          {
            item_id: 3, image_url: 'https://festy-images.s3.us-west-1.amazonaws.com/missing.jpg', item_name: 'Example Item Name', price: '99.99',
   ***REMOVED*****REMOVED***
          {
            item_id: 4, image_url: 'https://festy-images.s3.us-west-1.amazonaws.com/missing.jpg', item_name: 'Example Item Name', price: '99.99',
   ***REMOVED*****REMOVED***
    ***REMOVED***,
        seller_city: 'Example City',
        seller_id: 1,
        seller_name: 'Example Name',
        seller_rating: 5,
        seller_state: 'Example State',
        total_sales: 1000,
        us_free_shipping: true,
    ***REMOVED***
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
        <FreeShippingBundle data={serviceData***REMOVED*** />
      </CartColDiv>
    );
***REMOVED***
***REMOVED***

export default CartCol;
