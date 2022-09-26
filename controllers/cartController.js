const { cartService } = require('../services')
const { catchAsync }  = require('../utils/error')

const listUpCart = catchAsync(async (req, res) => {
	const { userId } = req.body

  const data = await cartService.listUpCart(userId)

	res.status(200).json({ data })
}) 

module.exports = {
	listUpCart,
}