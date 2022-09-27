const appDataSource = require('./dataSource')

const quantControl = async (productId, quantity, userId) => {

      await appDataSource.query(`
                UPDATE carts
                SET quantity=?
                WHERE product_id=? AND user_id=?`,
            [quantity, productId, userId]
	)
  return
}

module.exports = {
  quantControl,
}