const express = require('express');

const { cartController } = require('../controllers');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.delete('', validToken, cartController.listDelete)


module.exports = router;