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
      serviceData: { recommendedItemImages: ['image1', 'image2'] ***REMOVED***,
      itemId: 1,
  ***REMOVED***;

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
***REMOVED***

  componentDidMount() {
    const { itemData, itemId ***REMOVED*** = this.state;
    this.getURL();
    //  this.getData(itemId);
***REMOVED***

  // handleChange(event) {
  //   this.setState({ value: event.target.value ***REMOVED***);
  // ***REMOVED***

  // handleSubmit(event) {
  //   const { value ***REMOVED*** = this.state;
  //   console.log(`An essay was submitted: ${value***REMOVED***`);
  //   event.preventDefault();
  // ***REMOVED***

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
