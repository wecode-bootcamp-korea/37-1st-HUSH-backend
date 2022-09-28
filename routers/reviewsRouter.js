const express = require('express');

const reviewsController = require('../controllers/reviewsController');

const router = express.Router();

router.get('/:productId/modify', productsController.getProduct)

module.exports = router;
