const express = require('express')
const router = express.Router();

const userRouter = require('./userRouter');
const reviewRouter = require('./reviewRouter')
const orderRouter = require('./orderRouter');
const productRouter = require('./productRouter');
const searchRouter = require('./searchRouter')
const cartRouter = require('./cartRouter');
const likeRouter = require('./likeRouter');

router.use('/user', userRouter);
router.use('/review', reviewRouter);
router.use('/order', orderRouter);
router.use('/product', productRouter);
router.use('/search', searchRouter);
router.use('/cart', cartRouter);
router.use('/like', likeRouter);

module.exports = router;