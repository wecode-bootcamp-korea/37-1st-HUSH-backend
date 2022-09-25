const express = require('express');

const { reviewsController } = require('../controllers');

const router = express.Router();

router.get('/insert/:productId', reviewsController.postReviews)

module.exports = router;
