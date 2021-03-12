// code outside is "init code,"" and run once per VU
import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1, // Changed to 1, 10, 100, or 1000 requests
      timeUnit: '1s', // 1000 iterations per second, i.e. 1000 RPS
      duration: '1m', // 1 minute total duration
      preAllocatedVUs: 100, // Changed to 1, 10, 100, or 1000 virtual users to match RPS
      maxVUs: 5000,
      gracefulStop: '5s',
    }
  },
  discardResponseBodies: true,
  }

// code inside default is "VU Code," run over and over for duration of test
export default function () {
  let randomNum = Math.floor(Math.random() * (10000000 - 9000000 + 1)) + 9000000;
  http.get(`http://localhost:3004/shopping/items/${randomNum}`);
  sleep(1);
};

// run script: $ k6 run http-get-script.js
