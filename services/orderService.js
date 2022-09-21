const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const orderDao = require('../models/orderDao');



const createOrder = async (userId, total, reqMessage, address) => {
    
	const orderId = await orderDao.createOrder(userId, reqMessage, address);
    const products = await orderDao.getCartTrue(userId);
    await orderDao.createOrderItems(orderId, products);
    await orderDao.deleteCart(products);
    await orderDao.deleteProductStuck(products);
    await orderDao.deductPoint(userId, total);

    return;
    
}


module.exports = { 
    createOrder
}