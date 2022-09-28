const express = require('express');
const reviewsController = require('../controllers/reviewsController');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.patch('/:productId/modify', validToken, reviewsController.modifyReview);

module.exports = router;
