const cartService = require('../services/cartService')
const { catchAsync }  = require('../utils/error')

const orderList = catchAsync(async (req, res) => {
	const userId = req.userId;
	const productId = req.query.productId;

  const data = await cartService.orderList(userId, productId);

	res.status(200).json({ data })
}) 

module.exports = {
	orderList
}