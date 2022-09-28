const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { orderService }  = require('../services');
const { catchAsync } = require('../utils/error.js')

const getCartInfo = catchAsync(async (req, res) => {
  const userId = req.userId;

  const productId = req.query.productId;

  const cartInfo = await orderService.getCartInfo(userId, productId);

  console.log(cartInfo)
      
  res.status(201).json({ message : cartInfo});
  
})

const createOrder = catchAsync(async (req, res) => {
  const userId = req.userId;

  const { total, reqMessage, address, productId} = req.body;

  await orderService.createOrder(userId, productId, total, reqMessage, address);

  res.status(201).json({ message : "ORDER_SUCCESS"});

  })

  module.exports = {
    getCartInfo,
    createOrder
}
  
