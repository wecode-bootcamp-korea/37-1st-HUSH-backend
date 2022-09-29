const  { productService }  = require('../services');
const { catchAsync } = require('../utils/error')

  const getAllProducts = catchAsync(async (req, res) => {

    const categoryId = req.params.categoryId;

    const products = await productService.getAllProducts(categoryId);
  
    return res.status(200).json({ message : products });
  })
  
  const getProduct = catchAsync(async (req, res) => {
      
      const productId = req.params.productId;
      
      const products = await productService.getProduct(productId)
  
      return res.status(200).json({ message : products })
  })

  module.exports = {
    getAllProducts,
    getProduct
}