const express = require('express');
const app = express();

const dotenv = require('dotenv');

dotenv.config();

<<<<<<< HEAD
app.use(express.static(__dirname + '/public')); // What information is public?
=======
const max_failed_teams = 5;

const modes = {5: {
  num_of_spies: 2,
  num_of_resistance: 3 ,
  rounds: [2, 3, 2, 3, 3]
}};

// function play_game(modes) {

// }
>>>>>>> 46354f72e03a6a6c549e41ae95240c496356c855

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/start.html");
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port 3000');
});
