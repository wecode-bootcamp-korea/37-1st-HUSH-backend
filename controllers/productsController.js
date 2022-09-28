const { productsService } = require('../services')
const { catchAsync }  = require('../utils/error')

<<<<<<< HEAD
const getcategoryProducts = catchAsync(async (req, res) => {
    
    const categoryId = req.params.categoryId;
    
    const products = await productsService.getcategoryProducts(categoryId)
=======

const getAllProducts = catchAsync(async (req, res) => {

	const products = await productsService.getAllProducts();

	return res.status(200).json({ data : products });
})

const getProduct = catchAsync(async (req, res) => {
    
    const productId = req.params.productId;
    
    const products = await productsService.getProduct(productId)
>>>>>>> main

    res.status(200).json({ products })
})

module.exports = {
<<<<<<< HEAD
    getcategoryProducts
=======
    getAllProducts,
    getProduct
>>>>>>> main
}