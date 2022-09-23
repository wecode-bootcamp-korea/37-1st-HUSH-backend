const { cartDao } = require('../models')

const addCart = async (product_id, quantity, userId) => {

	return await cartDao.addCart(product_id, quantity, userId)
}

module.exports = {
  addCart,
}