const orderDao = require('../models/orderDao');

const getCartInfo = async (userId, productId) => {

    return await orderDao.getCartInfo(userId, productId);
}
module.exports = { 
    getCartInfo
}