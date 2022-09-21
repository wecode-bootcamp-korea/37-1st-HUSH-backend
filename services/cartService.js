const { cartDao } = require('../models');

const addCart = async (userId, porductId, quantity) => {
  return await cartDao.addCart(userId, porductId, quantity);
};

module.exports = {
  addCart,
};