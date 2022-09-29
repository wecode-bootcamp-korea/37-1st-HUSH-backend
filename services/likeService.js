const { likeDao } = require('../models');

const deleteLike = async (userId, productId) => {

	return await likeDao.deleteLike(userId, productId);
}

const getLikeList = async (userId) => {

	return await likeDao.getLikeList(userId);
    
}


const inputLike = async (userId, productId) => {
    
    const doesExist = await likeDao.checkLike(userId, productId);

    if(+doesExist){
        const error = new Error("ALREADY_EXISTS_IN_LIKE");
        error.statusCode = 400;
        throw error;
    }
    await likeDao.inputLike(userId, productId);

}

module.exports = { 
    deleteLike,
    getLikeList,
    inputLike
}