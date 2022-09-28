const appDataSource = require('./dataSource')

const getReviewExists = async ( user_id, product_id ) => {
    try {
        const [ review ] = await appDataSource.query(
            `SELECT EXISTS(
                SELECT
                    *
                FROM reviews
                WHERE user_id = ? AND product_id = ?
            ) AS boolean`,
            [ user_id, product_id ]
        )
        return review.boolean
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}

const postReviews = async ( user_id, product_id, content) => {
	console.log(content)
	return await appDataSource.query(`
		INSERT INTO reviews(
			user_id,
			product_id,
			content
		) VALUES (?, ?, ?);
			`, [ user_id, product_id, content ]
	);

}

const checkUser = async (userId, productId) => {
 
    const [doesExist] = await appDataSource.query(`
    SELECT EXISTS(
        SELECT 
            id
        FROM 
            reviews 
        WHERE 
            user_id = ? AND
            product_id = ?) AS boolean`,
    [userId, productId]
  )

    return doesExist.boolean;
    
  };

const modifyReview = async (userId, productId, content) => {

    await appDataSource.query(`
        UPDATE
            reviews
        SET
            content = ?
        WHERE 
            user_id = ? AND
            product_id = ?
        `,[ content, userId, productId ]
    )
    
    return;

    
};

const getreviews = async (product_id) => {
    return await appDataSource.query(`
	select u.name as userName, p.name as productName, r.content, r.created_at as createdAt
	from reviews r
	join users u
	on u.id=r.user_id
	join products p
	on p.id=r.product_id
	where product_id=?;
        `, [product_id])
  };


  module.exports = {
    checkUser,
    modifyReview,
    getreviews,
	getReviewExists
 }
