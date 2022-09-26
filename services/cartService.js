const { cartDao } = require('../models')

const listUpCart = (userId) => {

  return cartDao.listUpCart(userId)
}

module.exports = {
  listUpCart,
}