const productDao = require('../models/productDao');

const inputLike = async (userId, productId) => {
    
    const doesExist = await productDao.checkLike(userId, productId);

    if(+doesExist){
        const error = new Error("ALREADY_EXISTS_IN_LIKE");
        error.statusCode = 400;
        throw error;
    }
    await productDao.inputLike(userId, productId);

}

module.exports = { 
    inputLike,

}