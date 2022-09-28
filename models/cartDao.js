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

const listUpCart = (userId) => {
	return appDataSource.query(`
	SELECT
	p.thumbnail_image_url as url,
	p.name as pName,
	cate.name as cateName,
	c.quantity,
	p.price,
	p.id as pId
	FROM carts c
	LEFT JOIN products p ON p.id=c.product_id
	JOIN categories cate
	WHERE c.user_id=? and cate.id=category_id;`, [userId]
	)
  
}

const listDelete = async (productId, userId) => {
	
	await appDataSource.query(`
	DELETE FROM carts
	WHERE
	user_id=? AND product_id IN (?);`,
	[userId, productId]
	)
	return listUpCart(userId)
}

const quantControl = async (productId, quantity, userId) => {
	
	appDataSource.query(`
	UPDATE carts
	SET quantity=?
	WHERE product_id=? AND user_id=?`,
	[quantity, productId, userId]
	)
	return listUpCart(userId)
}

module.exports = {
	addCart,
  listUpCart,
	listDelete,
	quantControl,
}