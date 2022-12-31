const express = require('express');
const app = express();

const dotenv = require('dotenv');

dotenv.config();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port 3000');
});
