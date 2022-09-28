const express = require('express');
const router = express.Router();
const {validToken} = require('../utils/auth')
const { reviewController } = require('../controllers');

router.post('/:product_id', validToken, reviewController.postReview)
router.patch('/:productId', validToken, reviewController.modifyReview);
router.get('/:product_id', reviewController.getReviews)

module.exports = router;
