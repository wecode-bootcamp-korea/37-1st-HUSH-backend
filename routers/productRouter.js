const express = require('express');
const { productController }  = require('../controllers');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.get('/:categoryId', productController.getAllProducts)
router.get('/show/:productId', productController.getProduct)

module.exports = router;