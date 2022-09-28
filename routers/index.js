const express = require('express')
const router = express.Router();
const userRouter = require('./userRouter');
const productsRouter = require('./productsRouter')
const reviewsRouter = require('./reviewsRouter')
const orderRouter = require('./orderRouter');
const productRouter = require('./productRouter');
const searchRouter = require('./searchRouter')
const cartRouter = require('./cartRouter');

router.use('/user', userRouter);
router.use('/order', orderRouter);
router.use('/products', productRouter);
router.use('/search', searchRouter);
router.use('/cart', cartRouter);
router.use('/products', productsRouter);
router.use('/reviews', reviewsRouter);

module.exports = router;