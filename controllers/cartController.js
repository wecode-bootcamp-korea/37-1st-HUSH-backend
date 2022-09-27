const { cartService } = require('../services')
const { catchAsync }  = require('../utils/error')

<<<<<<< HEAD
const listDelete = catchAsync(async (req, res) => {
	const { productId } = req.body
	const userId = req.userId
	console.log(userId)		//userId - undefine 해결하면 끝
	const result = await cartService.listDelete(productId, userId)

	res.status(201).json ({ result })
})

module.exports = {
	listDelete,
=======
const addCart = catchAsync(async (req, res) => {

	const { productId, quantity } = req.body
	const userId = req.userId
	
	const insertId = await cartService.addCart(productId, quantity, userId)

	res.status(201).json({ insertId })
})

module.exports = {
	addCart,
>>>>>>> main
}