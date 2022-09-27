const express = require('express');

const { cartController } = require('../controllers');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.post('', validToken, cartController.addCart)
router.delete('', validToken, cartController.listDelete)


module.exports = router;