const appDataSource = require('./dataSource')

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

module.exports = {
  listUpCart,
}
