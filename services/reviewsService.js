const { reviewsDao } = require('../models')

const getreviews = async (product_id) => {
	return await reviewsDao.getreviews(product_id)
}

module.exports = {
    getreviews
}