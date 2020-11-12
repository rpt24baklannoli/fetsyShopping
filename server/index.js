const express = require('express');
const app = express();
const port = 3004;

app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.send('GET request received at endpoint "/"');
***REMOVED***)

app.listen(port, () => {
  console.log(`Fetsy shopping listening at port ${port***REMOVED***`);
***REMOVED***)