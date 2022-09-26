const express = require('express');

const { cartController } = require('../controllers');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.get('/listUp', validToken, cartController.listUpCart)


module.exports = router;