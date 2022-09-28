const reviewsDao = require('../models/reviewsDao')

const modifyReview = async (userId, productId, content) => {

    const checkUser = await reviewsDao.checkUser(userId, productId);
    if(!+checkUser){
        const error = new Error("NO_PERMMISION");
        error.statusCode = 400;
        throw error;
    }

    await reviewsDao.modifyReview(userId, productId, content)
}

module.exports = {
    modifyReview
}