const  productService  = require('../services/productService');
const { catchAsync } = require('../utils/error')

const inputLike = catchAsync(async (req, res) => {
    
    const { userId } = req.body;
    const productId = req.params.product_id;
      
    await productService.inputLike(userId, productId);
      
      res.status(201).json({ message : "INPUTLIKE_SUCCESS"});
  
  })

  module.exports = {
    inputLike
}