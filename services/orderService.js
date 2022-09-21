const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const orderDao = require('../models/orderDao');



const createOrder = async (products, total, reqMessage, address) => {
    
	const orderId = await orderDao.createOrder(userId, reqMessage, address);
    await orderDao.createOrderItems(orderId, products);
    await orderDao.deleteCart(products);
    await orderDao.deductPoint(userId, total);

    return;
    
}


module.exports = { 
    createOrder
}