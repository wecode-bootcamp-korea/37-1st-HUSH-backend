const express = require('express');

const cartController = require('../controllers/cartController');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.get('/listUp/order', validToken, cartController.orderList)


module.exports = router;