const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const  orderService  = require('../services/orderService.js');
const { catchAsync } = require('../utils/error.js')

const createOrder = catchAsync(async (req, res) => {
  const userId = req.userId;
  const { productId } = req.query;
  const { total, reqMessage, address } = req.body;
      
  await orderService.createOrder(userId, productId, total, reqMessage, address);
      
  res.status(201).json({ message : "ORDER_SUCCESS"});
  
  })

  module.exports = {
    createOrder
}
  
