const appDataSource = require('./dataSource')

const getReviewExists = async ( user_id, product_id ) => {
    try {
        const [ review ] = await appDataSource.query(
            `SELECT EXISTS(
                SELECT
                    *
                FROM reviews
                WHERE user_id = ? AND product_id = ?
            ) AS review`,
            [ user_id, product_id ]
        )
        return review
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}

const postReviews = async ( user_id, product_id, content) => {
	return await appDataSource.query(`
		INSERT INTO reviews(
			user_id,
			product_id,
			content
		) VALUES (?, ?, ?);
			`, [ user_id, product_id, content ]
	);

}

module.exports = {
    getReviewExists,
	postReviews
}
