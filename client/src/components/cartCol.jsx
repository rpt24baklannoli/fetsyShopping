/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import BuyBox from './buyBox.jsx';
import FreeShippingBundle from './freeShippingBundle.jsx';

class CartCol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceData: {},
      itemId: 1,
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { itemData, itemId } = this.state;
    this.getURL();
    this.getData(itemId);
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
      <div className="cart-col">
        <BuyBox data={serviceData} />
        <FreeShippingBundle data={serviceData} />
      </div>
    );
  }
}

export default CartCol;
