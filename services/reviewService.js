const { reviewDao, orderDao } = require('../models')

const postReview = async (user_id, product_id, content) => {

    const order = await orderDao.getOrders(user_id, product_id)
    if (!order){
        const err = new Error("You have not purchased a product");
        err.statusCode = 403;
        throw err
    }
    const getReviewExist = await reviewDao.getReviewExists( user_id, product_id);

    if ( +getReviewExist ) {
        const err = new Error("Only one review can be created")
        err.statusCode = 403;
        throw err
    }
    await reviewDao.postReview(user_id, product_id, content)
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

const getReviews = async (product_id) => {
	return await reviewDao.getReviews(product_id)
}

module.exports = {
    postReview,
    modifyReview,
    getReviews
}
