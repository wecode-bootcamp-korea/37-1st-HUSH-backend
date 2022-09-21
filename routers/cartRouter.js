const express = require('express');

const { cartController } = require('../controllers');
const { loginRequired } = require('../utils/auth')
const router = express.Router();

// router.post('/createCart', loginRequired, productController.createCart)
router.post('', cartController.addCart)

module.exports = router;