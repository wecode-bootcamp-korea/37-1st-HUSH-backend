const dataSource = require('./dataSource')

const addCart = async (productId, quantity, userId) => {
	const result = await dataSource.query(`
		INSERT INTO carts (
			user_id,
			product_id,
			quantity
		) VALUES (
			?,
			?,
			?
		)`, [userId, productId, quantity]
	)

	return result.insertId
}

module.exports = {
	addCart,
}