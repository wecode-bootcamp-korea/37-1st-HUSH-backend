const appDataSource = require('./dataSource')

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

const listDelete = async (productId, userId) => {

      const result = await appDataSource.query(`
      DELETE FROM carts
      WHERE
      product_id=? AND user_id=?;`,
            [quantity, userId]
	)
  return result
}

module.exports = {
  addCart,
  listDelete,
}