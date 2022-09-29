const dataSource = require('./dataSource')

const getReviewExists = async ( user_id, product_id ) => {

    const [review] = await dataSource.query(
        `SELECT EXISTS(
            SELECT
                *
            FROM reviews
            WHERE user_id = ? AND product_id = ?
        ) AS boolean`,
        [ user_id, product_id ]
    )
    return review.boolean
}

const postReview = async ( user_id, product_id, content) => {
	console.log(content)
	return await dataSource.query(`
		INSERT INTO reviews(
			user_id,
			product_id,
			content
		) VALUES (?, ?, ?);
		`, [ user_id, product_id, content ]
	);

}

const checkUser = async (userId, productId) => {
 
    const [doesExist] = await dataSource.query(`
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

    await dataSource.query(`
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

const getReviews = async (productId) => {

    return await dataSource.query(`
        SELECT 
            u.name as userName, 
            p.name as productName, 
            r.content, 
            r.created_at as createdAt
        FROM 
            reviews r
        JOIN 
            users u
        ON 
            u.id=r.user_id
        JOIN 
            products p
        ON 
            p.id=r.product_id
        WHERE 
            product_id=?;
    `, [productId])

};


  module.exports = {
    checkUser,
    postReview,
	modifyReview,
    getReviews,
	getReviewExists
 }
