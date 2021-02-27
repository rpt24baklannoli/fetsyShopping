// code outside is "init code,"" and run once per VU
import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000, // Changed to 1, 10, 100, or 1000 requests
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
  http.get('http://localhost:3004/shopping/items/9888777');
  sleep(1);
};

// run script: $ k6 run http-get-script.js
