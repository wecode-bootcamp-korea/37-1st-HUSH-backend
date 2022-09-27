const dataSource = require('./dataSource')

const addCart = async (product_id, quantity, userId) => {
	const result = await dataSource.query(`
		INSERT INTO carts (
			user_id,
			product_id,
			quantity
		) VALUES (
			?,
			?,
			?
		)`, [userId, product_id, quantity]
	)

	return result.insertId
}

module.exports = {
	addCart,
}