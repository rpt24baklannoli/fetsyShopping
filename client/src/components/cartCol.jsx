/* eslint-disable no-undef***REMOVED***/
/* eslint-disable import/extensions***REMOVED***/
/* eslint-disable jsx-a11y/label-has-associated-control***REMOVED***/
/* eslint-disable no-unused-vars***REMOVED***/
/* eslint-disable no-console***REMOVED***/
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import BuyBox from './buyBox.jsx';
import FreeShippingBundle from './freeShippingBundle.jsx';

class CartCol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceData: {***REMOVED***,
      itemId: 1,
  ***REMOVED***;

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
***REMOVED***

  componentDidMount() {
    const { itemData, itemId ***REMOVED*** = this.state;
    this.getURL();
    this.getData(itemId);
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
      <div className="cart-col">
        <BuyBox data={serviceData***REMOVED*** />
        <FreeShippingBundle data={serviceData***REMOVED*** />
      </div>
    );
***REMOVED***
***REMOVED***

export default CartCol;
