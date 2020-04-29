const express = require('express');
const router = express.Router();

const questionApi = require('../../../controllers/api/v1/question_api');

router.get('/:id',questionApi.index);
router.post('/create',questionApi.create);
router.delete('/:id/delete',questionApi.destroy);
router.use('/:id/options',require('./options'));

module.exports = router;
