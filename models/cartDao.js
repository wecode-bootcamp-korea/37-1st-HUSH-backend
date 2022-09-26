const appDataSource = require('./dataSource')

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
  listDelete,
}