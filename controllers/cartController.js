const { cartService } = require('../services')
const { catchAsync }  = require('../utils/error')

const addCart = catchAsync(async (req, res) => {

	const { productId, quantity } = req.body
	const userId = req.userId
	
	const insertId = await cartService.addCart(productId, quantity, userId)

	res.status(201).json({ insertId })
})

const listUpCart = catchAsync(async (req, res) => {
	const { userId } = req.body
	
  const data = await cartService.listUpCart(userId)
	
	res.status(200).json({ data })
}) 

const listDelete = catchAsync(async (req, res) => {
	const productId = req.query.productId
	const userId = req.userId
	const result = await cartService.listDelete(productId, userId)

	res.status(201).json ({ result })
})

module.exports = {
	addCart,
	listUpCart,
	listDelete,
}