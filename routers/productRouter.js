const express = require('express');
const { productController }  = require('../controllers');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.post('/showproduct/:productId/like', validToken, productController.inputLike);
router.get('/', productController.getAllProducts)
router.get('/:categoryId', productController.getAllProducts)
router.get('/showproduct/:productId', productController.getProduct)

module.exports = router;