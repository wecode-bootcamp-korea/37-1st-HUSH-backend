const { productsDao } = require('../models')

const getcategoryProducts = async (categoryId) => {
    return await productsDao.getcategoryProducts(categoryId)
}

module.exports = {
    getcategoryProducts
}