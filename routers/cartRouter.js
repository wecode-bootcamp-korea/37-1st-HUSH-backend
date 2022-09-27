const express = require('express');

const { cartController } = require('../controllers');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.post('/add', validToken, cartController.addCart)
router.get('/listUp', validToken, cartController.listUpCart)

module.exports = router;