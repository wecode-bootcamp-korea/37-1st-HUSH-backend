const { verify } = require('jsonwebtoken')
const { cartService } = require('../services')
const { catchAsync }  = require('../utils/error')

const quantControl = catchAsync(async (req, res) => {
	const { productId, quantity } = req.body
	const userId = req.userId
	const result = await cartService.quantControl(userId, productId, quantity)
	// console.log(userId)

	res.status(201).json ({ result })
})

module.exports = {
	quantControl,
}