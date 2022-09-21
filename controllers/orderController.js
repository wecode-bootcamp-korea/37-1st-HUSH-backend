const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const  orderService  = require('../services/orderService.js');
const { catchAsync } = require('../utils/error.js')

const createOrder = catchAsync(async (req, res) => {
    const { userId, total, reqMessage, address } = req.body;
      
      await orderService.createOrder(userId, total, reqMessage, address);
      
      res.status(201).json({ message : "SIGN_UP_SUCCESS"});
  
  })

  module.exports = {
    createOrder
}
  
