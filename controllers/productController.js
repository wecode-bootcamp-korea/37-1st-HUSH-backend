const  { productService }  = require('../services');
const { catchAsync } = require('../utils/error')

const inputLike = catchAsync(async (req, res) => {
    
    const userId = req.userId;
    const productId = req.params.productId;
      
    await productService.inputLike(userId, productId);
      
    res.status(201).json({ message : "INPUTLIKE_SUCCESS"});
  
  })

  const getAllProducts = catchAsync(async (req, res) => {

    const products = await productService.getAllProducts();
  
    return res.status(200).json({ data : products });
  })
  
  const getProduct = catchAsync(async (req, res) => {
      
      const productId = req.params.productId;
      
      const products = await productService.getProduct(productId)
  
      res.status(200).json({ products })
  })

  module.exports = {
    inputLike,
    getAllProducts,
    getProduct
}