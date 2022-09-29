const { reviewDao, orderDao } = require('../models')


const postReview = async (userId, productId, content) => {

    const checkUserForReview = await orderDao.getOrders(userId, productId)

    if (!+checkUserForReview){
        const err = new Error("NO_PERMISSION");
        err.statusCode = 403;
        throw err
    }
    const getReviewExist = await reviewDao.getReviewExists(userId, productId);

    if ( +getReviewExist ) {
        const err = new Error("REVIEW_ALREADY_EXISTS")
        err.statusCode = 403;
        throw err
    }
    await reviewDao.postReview(userId, productId, content)
    return;
}

const modifyReview = async (userId, productId, content) => {

    const checkUser = await reviewDao.checkUser(userId, productId);
    if(!+checkUser){
        const error = new Error("NO_PERMMISION");
        
        error.statusCode = 400;
        throw error;
    }

    return await reviewDao.modifyReview(userId, productId, content);
}

const getReviews = async (productId) => {
	return await reviewDao.getReviews(productId)
}

module.exports = {
    postReview,
    modifyReview,
    getReviews
}
