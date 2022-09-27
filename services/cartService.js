const { cartDao } = require('../models')

const addCart = async (productId, quantity, userId) => {

	return await cartDao.addCart(productId, quantity, userId)
}

const listDelete = async (productId, userId) => {

  return await cartDao.listDelete(productId, userId)
}

module.exports = {
  addCart,
  listDelete,
}