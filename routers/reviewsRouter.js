const express = require('express');
const router = express.Router();
const {validToken} = require('../utils/auth')

const { reviewsController } = require('../controllers');

router.post('/:product_id', validToken, reviewsController.postReviews)

module.exports = router;
