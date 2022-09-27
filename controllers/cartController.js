const { query } = require('express')
const { cartService } = require('../services')
const { catchAsync }  = require('../utils/error')

const quantControl = catchAsync(async (req, res) => {

	const productId = req.query.productId
	const quantity = req.query.quantity
	const userId = req.userId

	console.log(productId)
	console.log(quantity)
	console.log(userId)

	const result = await cartService.quantControl(productId, quantity, userId)

	res.status(201).json ({ message : "UPDATECART_SUCCESS" })
})

module.exports = {
	quantControl,
}