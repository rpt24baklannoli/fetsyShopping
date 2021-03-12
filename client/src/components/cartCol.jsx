/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
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
      isLoading: true,
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
          },
          {
            item_id: 3, image_url: 'https://festy-images.s3.us-west-1.amazonaws.com/missing.jpg', item_name: 'Example Item Name', price: '99.99',
          },
          {
            item_id: 4, image_url: 'https://festy-images.s3.us-west-1.amazonaws.com/missing.jpg', item_name: 'Example Item Name', price: '99.99',
          },
        ],
        seller_city: 'Example City',
        seller_id: 1,
        seller_name: 'Example Name',
        seller_rating: 5,
        seller_state: 'Example State',
        total_sales: 1000,
        us_free_shipping: true,
      },
      itemId: 1,
    };
  }

  componentDidMount() {
    // console.log('CDM react:', this.state)
    const { itemData, itemId } = this.state;
    this.getURL();
    //  this.getData(itemId);
  }

  getURL() {
    const currentURL = window.location;
    const itemId = currentURL.pathname.split('/')[2];

    this.setState({ itemId },
      () => this.getData(itemId)
    );
  }

  getData(itemId) {
    // axios.get(`/shopping/items/${itemId}`)
    axios.get(`http://13.52.16.25:3004/shopping/items/${itemId}`)
      .then((response) => {
        this.setState({
          serviceData: response.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log('React GET data error:', error);
      });
  }

  render() {
    const { serviceData } = this.state;

    if (this.state.isLoading === true) {
      return ( <h1 style={{textAlign: 'center'}}> Loading... </h1> )
    }

    return (
      <CartColDiv>
        <BuyBox data={serviceData} />
        <FreeShippingBundle data={serviceData} />
      </CartColDiv>
    );
  }
}

export default CartCol;
