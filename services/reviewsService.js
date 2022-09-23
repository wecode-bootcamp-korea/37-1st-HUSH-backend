const { reviewsDao } = require('../models')

const getAllreviews = async () => {
	return await reviewsDao.getAllreviews()
}

module.exports = {
    getAllreviews
}