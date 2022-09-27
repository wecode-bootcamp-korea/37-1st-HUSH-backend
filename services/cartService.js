const cartDao = require('../models/cartDao')

const orderList = (userId,productId) => {

  return cartDao.orderList(userId,productId)
  
}


const addCart = async (productId, quantity, userId) => {

	return await cartDao.addCart(productId, quantity, userId)
}

const listUpCart = (userId) => {

  return cartDao.orderList(userId,productId)
}

module.exports = {
  orderList,
  addCart,
  listUpCart
}