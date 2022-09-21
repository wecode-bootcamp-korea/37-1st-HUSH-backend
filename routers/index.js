const express = require('express')
const router = express.Router();

const userRouter = require('./userRouter');
const orderRouter = require('./orderRouter');

router.use('/users', userRouter);
//router.use('/order', cartRouter);

module.exports = router;