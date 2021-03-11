const newrelic = require('newrelic');
const app = require('./index.js');
const port = process.env.PORT || 3004;

app.listen(port, () => {
  console.log(`Fetsy shopping listening at port ${port}`);
});
