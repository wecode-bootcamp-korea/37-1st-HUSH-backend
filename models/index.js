const appDataSource = require('./dataSource')
const userDao = require('./userDao');
const productsDao = require('./productsDao')
const cartDao = require('./cartDao')
const reviewsDao = require('./reviewsDao.js')

module.exports = {
    appDataSource,
    userDao,
    productsDao,
    cartDao,
		reviewsDao,
}