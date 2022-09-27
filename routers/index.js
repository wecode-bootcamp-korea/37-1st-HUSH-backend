const express = require('express')

const router = express.Router();

const userRouter = require('./userRouter');
const productsRouter = require('./productsRouter');
const searchRouter = require('./searchRouter')
const cartRouter = require('./cartRouter');
const productRouter = require('./productRouter');

router.use('/user', userRouter);
router.use('/products', productsRouter);
router.use('/search', searchRouter);
router.use('/cart', cartRouter);
router.use('/product', productRouter);

module.exports = router;