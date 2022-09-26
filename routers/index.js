const express = require('express')

const router = express.Router();

const userRouter = require('./userRouter');
const orderRouter = require('./orderRouter');
const productRouter = require('./productRouter');

router.use('/user', userRouter);
router.use('/order', orderRouter);
router.use('/products', productRouter);


module.exports = router;