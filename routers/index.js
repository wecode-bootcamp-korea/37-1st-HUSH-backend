const express = require('express')
const router = express.Router();
const userRouter = require('./userRouter');
const orderRouter = require('./orderRouter');
const productRouter = require('./productRouter');
const searchRouter = require('./searchRouter')
const reviewsRouter = require('./reviewsRouter')
const cartRouter = require('./cartRouter');
const productsRouter = require('./productsRouter');

router.use('/user', userRouter);
router.use('/order', orderRouter);
router.use('/products', productRouter);
router.use('/search', searchRouter);
router.use('/cart', cartRouter);
router.use('/products', productsRouter);
router.use('/reviews', reviewsRouter);

module.exports = router;