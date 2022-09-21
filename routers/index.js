const express = require('express')
const router = express.Router();

const userRouter = require('./userRouter');
const myPageRouter = require('./myPageRouter');

router.use('/user', userRouter);
router.use('/mypage', myPageRouter);

module.exports = router;