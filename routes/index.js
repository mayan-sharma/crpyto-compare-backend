const express = require('express');

const { getComparisons, postComparison } = require('../controllers');

const router = express.Router();

router.get('/', getComparisons);

router.post('/', postComparison);

module.exports = router;