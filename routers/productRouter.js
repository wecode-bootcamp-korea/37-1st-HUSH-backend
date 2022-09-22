const express = require('express');
const productController  = require('../controllers/productController');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.post('/showproduct/:product_id/like', validToken, productController.inputLike);

module.exports = router;