const express = require('express');
const router = express.Router();
const poses = require('../data/poses.json');

router.get('/', (req, res) => {
  res.json(poses);
});

module.exports = router;
