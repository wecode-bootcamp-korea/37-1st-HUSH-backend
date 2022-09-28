const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');
const { validToken } = require('../utils/auth')


router.patch('/:productId/modify', validToken, reviewsController.modifyReview);
router.get('/:product_id', reviewsController.getreviews)

module.exports = router;
