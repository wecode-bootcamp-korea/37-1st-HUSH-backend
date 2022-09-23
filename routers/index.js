const express = require('express')

const router = express.Router();

const userRouter = require('./userRouter');
const productsRouter = require('./productsRouter')
const cartRouter = require('./cartRouter')

router.use('/user', userRouter);
router.use('/products', productsRouter);
router.use('/cart', cartRouter);

module.exports = router;