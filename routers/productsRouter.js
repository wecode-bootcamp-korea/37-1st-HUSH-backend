const express = require('express');
const { productsController } = require('../controllers');
const router = express.Router();

router.get('/', productsController.getAllProducts)
router.get('/showproduct/:productId', productsController.getProduct)
router.get('/showproducts/:categoryId', productsController.getcategoryProducts)

module.exports = router;
