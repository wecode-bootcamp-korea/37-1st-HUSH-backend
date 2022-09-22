const express = require('express');
const userController  = require('../controllers/userController');
const { validToken } = require('../utils/auth')

const router = express.Router();

router.post('/signup', userController.signUp);
router.post('/check', userController.checkUser);

router.post('/signin', userController.signIn);

router.delete('/likes/deletelike', validToken, userController.deleteLike);

module.exports = router;