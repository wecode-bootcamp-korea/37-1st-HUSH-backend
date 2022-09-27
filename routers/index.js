const express = require('express')

const router = express.Router();

const userRouter = require('./userRouter');
<<<<<<< HEAD
const productRouter = require('./productRouter');
const cartRouter = require('./cartRouter');


router.use('/user', userRouter);
router.use('/products', productRouter);
router.use('/cart', cartRouter);

=======
const productsRouter = require('./productsRouter')
const cartRouter = require('./cartRouter')

router.use('/user', userRouter);
router.use('/products', productsRouter);
router.use('/cart', cartRouter);
>>>>>>> main

module.exports = router;