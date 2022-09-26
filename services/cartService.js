const { cartDao } = require('../models')

const quantControl = async (productId, quantity, userId) => {

  return await cartDao.quantControl(productId, quantity, userId)
}

module.exports = {
  quantControl,
}