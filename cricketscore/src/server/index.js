const express = require('express');
const app = express();
const cors = require('cors');
const teamsData = require('./teams.json'); 
const playerData = require('./playerstats.json')

app.use(cors());

app.get('/teams', (req, res) => {
  res.json(teamsData);
});

app.get('/playerstats', (req, res) => {
  res.json(playerData);
});


app.listen(5001, () => {
  console.log('Server is running on http://localhost:5001');
});

