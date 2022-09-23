const express = require('express')

const router = express.Router();

const userRouter = require('./userRouter');
const reviewsRouter = require('./reviewsRouter');

router.use('/user', userRouter);
router.use('/reviews', reviewsRouter);

module.exports = router;