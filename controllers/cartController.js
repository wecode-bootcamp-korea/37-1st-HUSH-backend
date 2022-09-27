const { cartService } = require('../services')
const { catchAsync }  = require('../utils/error')

const addCart = catchAsync(async (req, res) => {

	const { productId, quantity } = req.body
	const userId = req.userId
	
	const insertId = await cartService.addCart(productId, quantity, userId)

	res.status(201).json({ insertId })
})

const listUpCart = catchAsync(async (req, res) => {
	const userId = req.userId;

  const data = await cartService.listUpCart(userId)

	res.status(200).json({ data })
}) 

module.exports = {
	addCart,
	listUpCart,
}