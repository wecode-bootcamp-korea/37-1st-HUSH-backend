const express = require('express');
const router = express.Router();
const { reviewsController } = require('../controllers');
const {validToken} = require('../utils/auth')

router.post('/:product_id', validToken, reviewsController.postReviews)

module.exports = router;
