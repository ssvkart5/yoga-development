const express = require('express');
const router = express.Router();
const classes = require('../data/classes.json');

router.get('/', (req, res) => {
  res.json(classes);
});

module.exports = router;
