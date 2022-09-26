const { verify } = require('jsonwebtoken')
const { cartService } = require('../services')
const { catchAsync }  = require('../utils/error')

const quantControl = catchAsync(async (req, res) => {
	const { productId, quantity } = req.body
	const userId = req.userId

	const data = await cartService.quantControl(userId, productId, quantity)

	res.status(201).json ({ data })
})

module.exports = {
	quantControl,
}