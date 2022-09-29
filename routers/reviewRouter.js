const express = require('express');
const router = express.Router();
const {validToken} = require('../utils/auth')
const { reviewController } = require('../controllers');

router.post('/inputReview/:productId', validToken, reviewController.postReview)
router.post('/modifyReview/:productId', validToken, reviewController.modifyReview);
router.get('/:productId', reviewController.getReviews)

module.exports = router;
