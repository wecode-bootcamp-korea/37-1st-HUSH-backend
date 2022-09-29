const { cartService } = require('../services')
const { catchAsync }  = require('../utils/error')

const addCart = catchAsync(async (req, res) => {

	const { productId, quantity } = req.body
	const userId = req.userId
	
	await cartService.addCart(productId, quantity, userId)

	res.status(201).json({ message : "ADDCART_SUCCESS" })
})

const listUpCart = catchAsync(async (req, res) => {

	const userId = req.userId;

  	const data = await cartService.listUpCart(userId)
	
	return res.status(200).json({ data })
	
}) 

const listDelete = catchAsync(async (req, res) => {

	const productId = req.query.productId
	const userId = req.userId
	await cartService.listDelete(productId, userId)

	return res.status(201).json ({ message : "DELETE_SUCCESS" })
})

const quantControl = catchAsync(async (req, res) => {
		
	const productId = req.query.productId
	const quantity = req.query.quantity
	const userId = req.userId
	
	await cartService.quantControl(productId, quantity, userId)
	return res.status(201).json ({ message : "UPDATEQUANTITY_SUCCESS" })

})
	
	module.exports = {
		addCart,
		listUpCart,
		listDelete,
		quantControl,
}