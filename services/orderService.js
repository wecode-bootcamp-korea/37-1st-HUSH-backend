const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const orderDao = require('../models/orderDao.js');

const createOrder = async (userId, total, reqMessage, address) => {
    
	const orderId = await orderDao.createOrder(userId, reqMessage, address);
    const products = await orderDao.getCartTrue(userId);
    await orderDao.createOrderItems(orderId, products);
    await orderDao.deleteProductStuck(products);
    await orderDao.deleteCart(userId, products);
    await orderDao.deductPoint(userId, total);

    return;
    
}
module.exports = { 
    createOrder
}