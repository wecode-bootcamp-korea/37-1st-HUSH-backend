const { productDao } = require('../models');

const inputLike = async (userId, productId) => {
    
    const doesExist = await productDao.checkLike(userId, productId);

    if(+doesExist){
        const error = new Error("ALREADY_EXISTS_IN_LIKE");
        error.statusCode = 400;
        throw error;
    }
    await productDao.inputLike(userId, productId);

}

const getAllProducts = async () => {
	return await productDao.getAllProducts()
}

const getProduct = async (productId) => {
    return await productDao.getProduct(productId)
}


module.exports = { 
    inputLike,
    getAllProducts,
    getProduct
}