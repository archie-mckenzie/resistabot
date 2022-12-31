const express = require('express');
const app = express();

const dotenv = require('dotenv');

dotenv.config();

const max_failed_teams = 5;

const modes = {5: {
  num_of_spies: 2,
  num_of_resistance: 3 ,
  rounds: [2, 3, 2, 3, 3]
}};

// function play_game(modes) {

// }

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port 3000');
});
