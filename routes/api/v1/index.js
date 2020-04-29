//after getting here, it routes to the product route

const express = require('express');
const router = express.Router();

router.use('/questions',require('./questions'));
router.use('/options',require('./options'));

module.exports = router;
