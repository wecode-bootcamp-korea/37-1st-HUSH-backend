const express = require('express')

const router = express.Router();

const userRouter = require('./userRouter');
const productsRouter = require('./productsRouter');
const productRouter = require('./productRouter');
const searchRouter = require('./searchRouter')
const cartRouter = require('./cartRouter');

router.use('/user', userRouter);
router.use('/products', productsRouter);
router.use('/product', productRouter);
router.use('/search', searchRouter);
router.use('/cart', cartRouter);

module.exports = router;