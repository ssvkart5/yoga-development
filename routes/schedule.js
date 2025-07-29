const express = require('express');
const router = express.Router();
const schedule = require('../data/schedule.json');

router.get('/', (req, res) => {
  res.json(schedule);
});

module.exports = router;
