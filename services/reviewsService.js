const { reviewsDao } = require('../models')

const postReviews = async (user_id, product_id, content) => {
	return await reviewsDao.postReviews(user_id, product_id, content)
}

module.exports = {
    postReviews
}
