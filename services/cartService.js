const { cartDao } = require('../models')

const quantControl = (userId, productId, quantity) => {

  return cartDao.quantControl(userId, productId, quantity)
}

module.exports = {
  quantControl,
}