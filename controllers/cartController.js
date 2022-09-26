const { cartService } = require('../services')
const { catchAsync }  = require('../utils/error')

const listDelete = catchAsync(async (req, res) => {
	const { productId } = req.body
	const userId = req.userId
	console.log(userId)		//userId - undefine 해결하면 끝
	const result = await cartService.listDelete(productId, userId)

	res.status(201).json ({ result })
})

module.exports = {
	listDelete,
}