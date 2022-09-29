const { productDao } = require('../models');

const getAllProducts = async (categoryId) => {
    if(categoryId == "all")
	    return await productDao.getAllProducts()
    else
        return await productDao.getcategoryProducts(categoryId);
}

const getProduct = async (productId) => {
    return await productDao.getProduct(productId)
}

module.exports = { 
    getAllProducts,
    getProduct
}