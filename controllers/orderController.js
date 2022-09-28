const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const  orderService  = require('../services/orderService.js');
const { catchAsync } = require('../utils/error.js')

const getCartInfo = catchAsync(async (req, res) => {
  const userId = req.userId;

  const productId = req.query.productId;

  const cartInfo = await orderService.getCartInfo(userId, productId);

  console.log(cartInfo)
      
  res.status(201).json({ message : cartInfo});
  
  })

  module.exports = {
    getCartInfo
}
  
