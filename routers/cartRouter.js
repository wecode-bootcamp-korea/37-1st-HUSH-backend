const express = require('express');

const { cartController } = require('../controllers');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.post('/addCart', validToken, cartController.addCart)
router.get('/listUp', validToken, cartController.listUpCart)
router.post('/quantControl', validToken, cartController.quantControl)
router.delete('deleteCart', validToken, cartController.listDelete)

module.exports = router;