const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const  orderService  = require('../services/orderService');
const { catchAsync } = require('../utils/error')

const createOrder = catchAsync(async (req, res) => {
    const { products, total, reqMessage, address } = req.body;
      
      await orderService.createOrder(products, total, reqMessage, address);
      
      res.status(201).json({ message : "SIGN_UP_SUCCESS"});
  
  })

  module.exports = {
    createOrder
}
  
