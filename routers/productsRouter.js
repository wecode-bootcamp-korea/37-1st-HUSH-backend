const express = require('express');
const { productsController } = require('../controllers');
const router = express.Router();

router.get('/', productsController.getAllProducts)
router.get('/showproduct/:productId', productsController.getProduct)

module.exports = router;
