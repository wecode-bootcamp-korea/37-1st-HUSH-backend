const appDataSource = require('./dataSource')

const postReviews = async ( user_id, product_id, content) => {
	const results = await appDataSource.query(`
		INESRT INTO reviews(
			user_id,
			product_id,
			content
		) VALUES (?, ?, ?);
			`, [ user_id, product_id, content ]
	);

	return results
}

module.exports = {
    postReviews
}
