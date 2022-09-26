const appDataSource = require('./dataSource')

const quantControl = async (userId, productId, quantity) => {
        return appDataSource.query(`
    UPDATE carts
    SET quantity=?
    WHERE product_id=?&user_id=?`,
    [quantity, productId, userId]
	)
}

module.exports = {
  quantControl,
}