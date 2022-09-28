const { productsService } = require('../services')
const { catchAsync }  = require('../utils/error')

const getcategoryProducts = catchAsync(async (req, res) => {

    const categoryId = req.params.categoryId;

    const products = await productsService.getcategoryProducts(categoryId)

    res.status(200).json({ products })
})

const getAllProducts = catchAsync(async (req, res) => {

	const products = await productsService.getAllProducts();

	return res.status(200).json({ data : products });
})

const getProduct = catchAsync(async (req, res) => {
    
    const productId = req.params.productId;
    
    const products = await productsService.getProduct(productId)

    res.status(200).json({ products })
})

module.exports = {
    getcategoryProducts,
    getAllProducts,
    getProduct
}