const express = require('express');

const { cartController } = require('../controllers');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.post('/add', validToken, cartController.addCart)
// router.post('/add', cartController.addCart)


module.exports = router;
