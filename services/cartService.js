const { cartDao } = require('../models')

const addCart = async (productId, quantity, userId) => {

	return await cartDao.addCart(productId, quantity, userId)
}

const listUpCart = (userId) => {
  
  return cartDao.listUpCart(userId)
}

<<<<<<< HEAD
const listDelete = async (productId, userId) => {
  
  return await cartDao.listDelete(productId, userId)
=======
const quantControl = async (productId, quantity, userId) => {

  return await cartDao.quantControl(productId, quantity, userId)
>>>>>>> main
}

module.exports = {
  addCart,
  listUpCart,
<<<<<<< HEAD
  listDelete,
=======
  quantControl,
>>>>>>> main
}