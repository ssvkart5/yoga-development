const express = require('express');
const router = express.Router();
const schedules = require('../data/schedule.json');

router.get('/', (req, res) => {
  res.json(schedules);
});

module.exports = router;
