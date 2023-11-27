const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname`/../data/leaderboard.json`);

const defaultScores = [
  {
    id: 1,
    username: 'Franck',
    score: 300,
  },
  {
    id: 2,
    username: 'Danielle',
    score: 400,
  },
  {
    id: 3,
    username: 'Hanni',
    score: 500,
  },
];

function readAllScores() {
  const scores = parse(jsonDbPath, defaultScores);
  return scores;
}

module.exports = {
  readAllScores,
};
