const express = require('express');

const { cartController } = require('../controllers');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.post('/control', validToken, cartController.quantControl)


module.exports = router;