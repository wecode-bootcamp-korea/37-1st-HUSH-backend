const express = require('express')

const router = express.Router();

const userRouter = require('./userRouter');
const productsRouter = require('./productsRouter')
const reviewsRouter = require('./reviewsRouter')

router.use('/user', userRouter);
router.use('/products', productsRouter);
router.use('/reviews', reviewsRouter);

module.exports = router;