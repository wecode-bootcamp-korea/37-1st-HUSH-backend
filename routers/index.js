const express = require('express')

const router = express.Router();

const userRouter = require('./userRouter');
const productsRouter = require('./productsRouter')


router.use('/user', userRouter);
router.use('/products', productsRouter);


module.exports = router;