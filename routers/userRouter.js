const express = require('express');
const userController  = require('../controllers/userController');
<<<<<<< HEAD
const { validToken } = require('../utils/auth')
=======
const { validToken } = require('../utils/auth');
>>>>>>> 0a9da4f925680f30bbdbcd66d59389197a51a014

const router = express.Router();

router.post('/signup', userController.signUp);
router.post('/check', userController.checkUser);

router.post('/signin', userController.signIn);

<<<<<<< HEAD
router.delete('/likes/deletelike', validToken, userController.deleteLike);
=======
router.get('/like', validToken, userController.getLikeList);
>>>>>>> 0a9da4f925680f30bbdbcd66d59389197a51a014

module.exports = router;