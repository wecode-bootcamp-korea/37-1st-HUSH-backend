const express = require('express');

const { cartController } = require('../controllers');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.post('', validToken, cartController.addCart)
router.get('/listUp', validToken, cartController.listUpCart)
router.post('/control', validToken, cartController.quantControl)
router.delete('', validToken, cartController.listDelete)

module.exports = router;