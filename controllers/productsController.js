const { productsService } = require('../services')
const { catchAsync }  = require('../utils/error')

const getProduct = catchAsync(async (req, res) => {
    // console.log(req.body)
    const productId = req.params.productId;
    
    const products = await productsService.getProduct(productId)

    res.status(200).json({ products })
})

module.exports = {
    getProduct
}