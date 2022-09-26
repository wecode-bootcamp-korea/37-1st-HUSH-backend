const { cartService } = require('../services')
const { catchAsync }  = require('../utils/error')

const quantControl = catchAsync(async (req, res) => {
	const { productId, quantity } = req.body
	const userId = req.userId
	console.log(userId)		//userId - undefine 해결하면 끝
	const result = await cartService.quantControl(productId, quantity, userId)

	res.status(201).json ({ result })
})

module.exports = {
	quantControl,
}