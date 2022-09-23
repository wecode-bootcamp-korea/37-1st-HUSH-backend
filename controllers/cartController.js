const { cartService } = require('../services')
const { catchAsync }  = require('../utils/error')

const addCart = catchAsync(async (req, res) => {

	const {  product_id, quantity} = req.body
	const userId = req.userId

	const insertId = await cartService.addCart(product_id, quantity, userId)

	res.status(201).json({ insertId })
})

module.exports = {
	addCart,
}