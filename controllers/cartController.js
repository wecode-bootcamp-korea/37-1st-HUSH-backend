const { cartService } = require('../services')
const { catchAsync }  = require('../utils/error')

const addCart = catchAsync(async (req, res) => {

	const {  productId, quantity} = req.body
	const userId = req.userId

	const insertId = await cartService.addCart(productId, quantity, userId)

	res.status(201).json({ insertId })
})

module.exports = {
	addCart,
}
