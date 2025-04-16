const express = require('express');
const app = express();
const cors = require('cors');
const teamsData = require('./teams.json'); // Ensure this path is correct

app.use(cors());

app.get('/teams', (req, res) => {
  res.json(teamsData);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});