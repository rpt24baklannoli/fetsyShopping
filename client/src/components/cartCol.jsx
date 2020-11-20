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
      itemData: {***REMOVED***,
  ***REMOVED***;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
***REMOVED***

  componentDidMount() {
    this.getData();
***REMOVED***

  handleChange(event) {
    this.setState({ value: event.target.value ***REMOVED***);
***REMOVED***

  handleSubmit(event) {
    const { value ***REMOVED*** = this.state;
    console.log(`An essay was submitted: ${value***REMOVED***`);
    event.preventDefault();
***REMOVED***

  getData() {
    axios.get('/shopping/items/2')
      .then((response) => {
        this.setState({ itemData: response.data ***REMOVED***);
        console.log('state:', this.state);
    ***REMOVED***)
      .catch((error) => {
        console.log(error);
    ***REMOVED***);
***REMOVED***

  render() {
    const { itemData ***REMOVED*** = this.state;
    return (
      <div className="cart-col">
        <BuyBox data={itemData***REMOVED*** />
        <FreeShippingBundle data={itemData***REMOVED*** />
      </div>
    );
***REMOVED***
***REMOVED***

export default CartCol;
