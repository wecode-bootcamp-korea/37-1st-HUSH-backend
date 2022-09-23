const { cartService } = require('../services')
const { catchAsync }  = require('../utils/error')

const addCart = catchAsync(async (req, res) => {
	// const {  product_id, quantity, user_id} = req.body
	const {  product_id, quantity} = req.body
	console.log(req.user)
	const userId = req.user.id

	const insertId = await cartService.addCart(product_id, quantity, userId)

	res.status(201).json({ insertId })
})

module.exports = {
	addCart,
}