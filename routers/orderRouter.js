const express = require('express');
const orderController  = require('../controllers/orderController.js');
const  { validToken } = require('../utils/auth.js');

const router = express.Router();

router.get('/getCartInfo', validToken, orderController.getCartInfo);


module.exports = router;