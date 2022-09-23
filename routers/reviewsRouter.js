const express = require('express');

const { reviewsController } = require('../controllers');

const router = express.Router();

router.get('/', reviewsController.getAllreviews)

module.exports = router;
