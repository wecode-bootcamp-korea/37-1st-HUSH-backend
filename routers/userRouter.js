const express = require('express');
const { userController }  = require('../controllers');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.post('/signup', userController.signUp);
router.post('/check', userController.checkUser);
router.post('/signin', userController.signIn);
router.get('/point', validToken, userController.getPoint);
router.get('/getUserInfo', validToken, userController.getUserInfo);

module.exports = router;