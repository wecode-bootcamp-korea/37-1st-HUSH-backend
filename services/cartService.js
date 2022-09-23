const { cartDao } = require('../models')

const addCart = async (productId, quantity, userId) => {
	return await cartDao.addCart(productId, quantity, userId)
}

module.exports = {
  addCart,
}