const productsController = require('./productsController')
const userController = require('./userController')
const reviewsController = require ('./reviewsController')
const cartController = require('./cartController')

module.exports = { 
	userController,
	productsController,
	cartController,
	reviewsController
}