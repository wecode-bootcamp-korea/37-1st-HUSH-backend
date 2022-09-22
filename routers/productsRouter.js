const express = require('express');

const  productsController  = require('../controllers/productsController');
// const { loginRequired } = require('../utils/auth')
const router = express.Router();

//router.get('/showproduct/:productId', productsController.getProduct)
//router.get('/', productsController.getAllProducts)
router.get('/showproducts/:categoryId', productsController.getcategoryProducts)
// router.patch('/:postId', loginRequired, postController.updatePost)
// router.delete('/:postId', loginRequired, postController.deletePost)

module.exports = router;
