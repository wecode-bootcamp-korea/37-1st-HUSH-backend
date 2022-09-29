const express = require('express');
const { likeController } = require('../controllers');
const { validToken } = require('../utils/auth.js');

const router = express.Router();

router.delete('/deletelike', validToken, likeController.deleteLike);
router.get('/getList', validToken, likeController.getLikeList);
router.post('/:productId', validToken, likeController.inputLike);
:3000/like/product/1
:3000/like/review/1

module.exports = router;

