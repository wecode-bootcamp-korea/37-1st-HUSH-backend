const express = require('express');
const productController  = require('../controllers/productController');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.post('/showproduct/:productId/like', validToken, productController.inputLike);

module.exports = router;