const { productsDao } = require('../models')

const getcategoryProducts = async (categoryId) => {
    return await productsDao.getcategoryProducts(categoryId)
}

const getAllProducts = async () => {
	return await productsDao.getAllProducts()
}

const getProduct = async (productId) => {
    return await productsDao.getProduct(productId)
}

module.exports = {
    getcategoryProducts,
    getAllProducts,
    getProduct,
}