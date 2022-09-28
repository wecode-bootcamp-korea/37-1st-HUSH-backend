const { productsDao } = require('../models')

const getAllProducts = async () => {
	return await productsDao.getAllProducts()
}

const getProduct = async (productId) => {
    return await productsDao.getProduct(productId)
}

module.exports = {
    getAllProducts,
    getProduct
}