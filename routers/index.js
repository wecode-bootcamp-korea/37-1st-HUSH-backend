const express = require('express')

const router = express.Router();

const userRouter = require('./userRouter');
const productsRouter = require('./productsRouter')
const searchRouter = require('./searchRouter')
const cartRouter = require('./cartRouter')

router.use('/user', userRouter);
router.use('/products', productsRouter);
router.use('/cart', cartRouter);
router.use('/search', searchRouter);

module.exports = router;