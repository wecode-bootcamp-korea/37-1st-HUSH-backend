const express = require('express');
const { reviewsController } = require('../controllers');
const router = express.Router();
const {validToken} = require('../utils/auth')

router.post('/', validToken, reviewsController.postReviews)

module.exports = router;
