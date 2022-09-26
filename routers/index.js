const express = require('express')

const router = express.Router();

const userRouter = require('./userRouter');
const productsRouter = require('./productsRouter')
const searchRouter = require('./searchRouter')

router.use('/user', userRouter);
router.use('/products', productsRouter);
router.use('/search', searchRouter);


module.exports = router;