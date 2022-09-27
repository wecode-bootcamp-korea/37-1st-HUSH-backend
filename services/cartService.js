const cartDao = require('../models/cartDao')

const orderList = (userId,productId) => {

  return cartDao.orderList(userId,productId)
}

module.exports = {
  orderList
}