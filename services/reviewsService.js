const { reviewsDao } = require('../models')

const postReviews = async (product_id) => {
	return await reviewsDao.postReviews(product_id)
}

module.exports = {
    postReviews
}
