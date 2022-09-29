const express = require('express');
const { likeController }  = require('../controllers');
const  { validToken } = require('../utils/auth.js');

const router = express.Router();

router.delete('/deletelike', validToken, likeController.deleteLike);
router.get('/getList', validToken, likeController.getLikeList);
router.post('/:productId', validToken, likeController.inputLike);

module.exports = router;