const { productsService } = require('../services')
const { catchAsync }  = require('../utils/error')

const getAllProducts = catchAsync(async (req, res) => {

	const products = await productsService.getAllProducts();

	return res.status(200).json({ data : products });
})

module.exports = {
    getAllProducts
}