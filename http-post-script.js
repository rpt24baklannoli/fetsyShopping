import http from 'k6/http';

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 10, // Changed to 1, 10, 100, or 1000 requests
      timeUnit: '1s', // 1000 iterations per second, i.e. 1000 RPS
      duration: '1m', // 1 minute total duration
      preAllocatedVUs: 10, // Changed to 1, 10, 100, or 1000 virtual users to match RPS
      maxVUs: 2000,
  ***REMOVED***
***REMOVED***
***REMOVED***;

export default function () {
  var url = 'http://localhost:3004/shopping/items';
  var payload = JSON.stringify({
    item_name: 'K6 POST Item',
    best_seller: true,
    price: 101,
    price_reduction: 10,
    in_stock: false,
    us_free_shipping: true,
    carts_item_is_in: 3
***REMOVED***);
  var params = {
    headers: {
      'Content-Type': 'application/json',
  ***REMOVED***
***REMOVED***;
  http.post(url, payload, params);
***REMOVED***;

// run script: $ k6 run http-post-script.js
