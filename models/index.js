const appDataSource = require('./dataSource')
<<<<<<< HEAD
const cartDao = require('./cartDao.js')

module.exports = {
    appDataSource,
    cartDao
}
=======
const userDao = require('./userDao');
const productsDao = require('./productsDao.js')
const cartDao = require('./cartDao');

module.exports = {
  appDataSource,
  userDao,
  productsDao,
  cartDao,
};

>>>>>>> main
