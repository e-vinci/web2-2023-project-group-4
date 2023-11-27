const express = require('express');
const { Users } = require('../models/users');
const { auths } = require('../utils/auths');

const router = express.Router();
const userModels = new Users();

/* GET users listing. */
router.get('/', (req, res) => {
  const allUsers = userModels.getAllUsers(req.params.username);
  return res.json(allUsers);
});

/** get an username */
router.get('/:username', (req, res) => {
  if (!req.params || req.params.username === '') return res.status(400);

  const user = userModels.readOneUserFromUsername(req.params.username);
  if (!user) return res.status(404);

  return res.json(user);
});

module.exports = router;
