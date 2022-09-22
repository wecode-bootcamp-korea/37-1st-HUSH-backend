const productDao = require('../models/productDao');

const inputLike = async (userId, productId) => {

    doesExist = await productDao.inputLike(userId, productId);

}

module.exports = { 
    inputLike
}