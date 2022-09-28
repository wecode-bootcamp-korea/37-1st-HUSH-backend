const { productsDao } = require('../models')

const getProduct = async (productId) => {
    return await productsDao.getProduct(productId)
}

module.exports = {
    getProduct
}