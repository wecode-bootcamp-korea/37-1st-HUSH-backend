const { cartDao } = require('../models')

const listDelete = async (productId, userId) => {

  return await cartDao.listDelete(productId, userId)
}

module.exports = {
  listDelete,
}