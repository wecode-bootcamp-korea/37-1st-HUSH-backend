const express = require('express');
const orderController  = require('../controllers/orderController');
const  { validToken } = require('../utils/auth');

const router = express.Router();

router.post('/', validToken, orderController.createOrder);


module.exports = router;