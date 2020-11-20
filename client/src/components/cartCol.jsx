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
      itemData: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { value } = this.state;
    console.log(`An essay was submitted: ${value}`);
    event.preventDefault();
  }

  getData() {
    axios.get('/shopping/items/2')
      .then((response) => {
        this.setState({ itemData: response.data });
        console.log('state:', this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { itemData } = this.state;
    return (
      <div className="cart-col">
        <BuyBox data={itemData} />
        <FreeShippingBundle data={itemData} />
      </div>
    );
  }
}

export default CartCol;
