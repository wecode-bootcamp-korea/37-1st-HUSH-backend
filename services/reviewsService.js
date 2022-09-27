const { reviewsDao, ordersDao } = require('../models')

const postReviews = async (user_id, product_id, content) => {
    const order = await ordersDao.getOrders(user_id, product_id)
    if (!order){
        const err = new Error("You have not purchased a product");
        err.statusCode = 403;
        throw err
    }
    return await reviewsDao.postReviews(user_id, product_id, content)
}

module.exports = {
    postReviews
}
