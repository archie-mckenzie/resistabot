const express = require('express');
const app = express();

const dotenv = require('dotenv');

dotenv.config();

app.use(express.static(__dirname + '/public')); // What information is public?

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/start.html");
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port 3000');
});
