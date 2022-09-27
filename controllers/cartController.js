const cartService = require('../services/cartService')
const { catchAsync }  = require('../utils/error')

const orderList = catchAsync(async (req, res) => {
	const userId = req.userId;
	const productId = req.query.productId;

  const data = await cartService.orderList(userId, productId);

	res.status(200).json({ data })
}) 

const addCart = catchAsync(async (req, res) => {

	const { productId, quantity } = req.body
	const userId = req.userId
	
	const insertId = await cartService.addCart(productId, quantity, userId)

	res.status(201).json({ insertId })
})

const listUpCart = catchAsync(async (req, res) => {
	const { userId } = req.body

  const data = await cartService.orderList(userId, productId);

	res.status(200).json({ data })
}) 

module.exports = {
	orderList,
	addCart,
	listUpCart
}