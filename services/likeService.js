const { likeDao } = require('../models');

const deleteLike = async (userId, productId) => {

	return await likeDao.deleteLike(userId, productId);
}

const getLikeList = async (userId) => {

	return await likeDao.getLikeList(userId);
    
}

module.exports = { 
    deleteLike,
    getLikeList
}