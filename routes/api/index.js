
//After reaching here it routes to the v1(api) route

const express = require('express');
const router = express.Router();

router.use('/v1',require('./v1'));

module.exports = router;