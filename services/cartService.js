const { cartDao } = require('../models')

const addCart = async (productId, quantity, userId) => {

	return await cartDao.addCart(productId, quantity, userId)
}

const listUpCart = (userId) => {

  return cartDao.listUpCart(userId)
}

const quantControl = (userId, productId, quantity) => {
  
  return cartDao.quantControl(userId, productId, quantity)
}

module.exports = {
  addCart,
  listUpCart,
  quantControl,
}