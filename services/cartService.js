const { cartDao } = require('../models')

const addCart = async (productId, quantity, userId) => {

	return await cartDao.addCart(productId, quantity, userId)
}

const listUpCart = (userId) => {

  return cartDao.listUpCart(userId)
}

const quantControl = async (productId, quantity, userId) => {

  return await cartDao.quantControl(productId, quantity, userId)
}

module.exports = {
  addCart,
  listUpCart,
  quantControl,
}