const express = require('express');

const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.getAllProducts)
router.get('/:categoryId', productsController.getAllProducts)

module.exports = router;