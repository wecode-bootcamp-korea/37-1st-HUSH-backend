const { reviewsDao, ordersDao } = require('../models')



const postReviews = async (user_id, product_id, content) => {

    const order = await ordersDao.getOrders(user_id, product_id)
    if (!order){
        const err = new Error("You have not purchased a product");
        err.statusCode = 403;
        throw err
    }
    const getReviewExists = await reviewsDao.getReviewExists( user_id, product_id);

    if ( +getReviewExists ) {
        const err = new Error("Only one review can be created")
        err.statusCode = 403;
        throw err
    }
    await reviewsDao.postReviews(user_id, product_id, content)
    return;
}

module.exports = {
    postReviews
}
