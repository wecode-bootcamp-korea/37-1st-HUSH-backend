const express = require('express');
const { orderController }  = require('../controllers');
const  { validToken } = require('../utils/auth.js');

const router = express.Router();

router.get('/getCartInfo', validToken, orderController.getCartInfo);
router.post('/', validToken, orderController.createOrder);


module.exports = router;