const express = require('express');
const { readAllScoresSorted } = require('../models/leaderboard');

const router = express.Router();

// return leaderboard by highest score
router.get('/', async (req, res) => {
  const sortedUser = readAllScoresSorted();
  if (sortedUser === undefined) return res.sendStatus(400);

  return res.json(sortedUser);
});
