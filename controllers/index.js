const userController = require('./userController')
const productController = require('./productController')
const reviewController = require ('./reviewController')
const cartController = require('./cartController')
const searchController = require('./searchController')
const orderController = require('./orderController')
const likeController = require('./likeController')

module.exports = { 
	userController,
	productController,
	cartController,
	reviewController,
	searchController,
	orderController,
	likeController
}