/* eslint-disable jsx-a11y/label-has-associated-control***REMOVED***/
/* eslint-disable import/extensions***REMOVED***/

import React from 'react';
import PropTypes from 'prop-types';

function ShoppingRegion(props) {
  const { data ***REMOVED*** = props;
  return (
    <div className="shoppingRegion">

      <div className="color-quantity">
        <div>
          <label htmlFor="color-select">Primary Color</label>
          <select name="colors" id="color-select">
            <option value="">Select a color</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="Violet">Violet</option>
            <option value="Indigo">Indigo</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity-select">Quantity</label>
          <select name="quantity" id="quantity-select">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>

      <div className="add-to-cart">
        <form action="" method="" className="add-to-cart-form">
          <button className="add-to-cart-button" type="submit">
            Add to cart
          </button>
        </form>
      </div>

      <div className="cart-shipping">
        <div>
          <div>
            <span>
   ***REMOVED*****REMOVED*****REMOVED***Cart Image*
            </span>
          </div>
          <p>
            <strong>
              Other people want this.&nbsp;
            </strong>
            Over&nbsp;
            {data.carts_item_is_in***REMOVED***
            &nbsp;people have this in their carts right now.
          </p>
        </div>
        <div>
          <div>
            <span>
   ***REMOVED*****REMOVED*****REMOVED***Truck Image*
            </span>
          </div>
          <p>
            <b>
              Nice choice!&nbsp;
            </b>
            Enjoy free shipping to the US when you spend $35+ at this shop.&nbsp;
            {`${data.us_free_shipping***REMOVED***`***REMOVED***
          </p>
        </div>
      </div>
    </div>
  );
***REMOVED***

export default ShoppingRegion;

// Props typechecking
ShoppingRegion.propTypes = {
  data: PropTypes.shape({
    best_seller: PropTypes.bool.isRequired,
    carts_item_is_in: PropTypes.number.isRequired,
    in_stock: PropTypes.bool.isRequired,
    item_id: PropTypes.number.isRequired,
    item_name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    price_reduction: PropTypes.string.isRequired,
    us_free_shipping: PropTypes.bool.isRequired,
***REMOVED***),
***REMOVED***;
