const { productsDao } = require('../models')

const getAllProducts = async () => {
	return await productsDao.getAllProducts()
}

module.exports = {
    getAllProducts
}