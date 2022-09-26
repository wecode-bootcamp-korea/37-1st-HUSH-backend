const  productService  = require('../services/productService');
const { catchAsync } = require('../utils/error')

const inputLike = catchAsync(async (req, res) => {
    
    const userId = req.userId;
    const productId = req.params.productId;
      
    await productService.inputLike(userId, productId);
      
    res.status(201).json({ message : "INPUTLIKE_SUCCESS"});
  
  })

  module.exports = {
    inputLike
}