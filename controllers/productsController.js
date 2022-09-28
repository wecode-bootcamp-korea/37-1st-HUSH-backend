const { productsService } = require('../services')
const { catchAsync }  = require('../utils/error')

const getcategoryProducts = catchAsync(async (req, res) => {

    const categoryId = req.params.categoryId;

    const products = await productsService.getcategoryProducts(categoryId)

    res.status(200).json({ products })
})

module.exports = {
    getcategoryProducts
}