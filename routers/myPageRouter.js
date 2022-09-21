const express = require('express');
const myPageController  = require('../controllers/myPageController');
const  { validToken } = require('../utils/auth.js');

const router = express.Router();

router.get('/like', validToken, myPageController.getLike);

module.exports = router;