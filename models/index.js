const appDataSource = require('./dataSource')
const productsDao = require('./productsDao.js')
const reviewsDao = require('./reviewsDao.js')
const ordersDao = require('./ordersDao')
const userDao = require('./userDao');
const cartDao = require('./cartDao')

module.exports = {
    appDataSource,
    userDao,
    productsDao,
    cartDao,
		reviewsDao,
    ordersDao
}