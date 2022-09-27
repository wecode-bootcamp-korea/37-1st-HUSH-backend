const appDataSource = require('./dataSource')
const productsDao = require('./productsDao.js')
const reviewsDao = require('./reviewsDao.js')
const ordersDao = require('./ordersDao')

module.exports = {
    appDataSource,
    productsDao,
    reviewsDao,
    ordersDao
}