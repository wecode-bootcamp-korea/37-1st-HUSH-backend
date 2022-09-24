const express = require('express');

const { reviewsController } = require('../controllers');

const router = express.Router();

router.get('/:product_id', reviewsController.getreviews)

module.exports = router;
