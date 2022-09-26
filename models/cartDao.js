const appDataSource = require('./dataSource')

const listUpCart = (userId) => {
	return appDataSource.query(`
    SELECT DISTINCT
     c.checkbox as checkBox, 
     p.thumbnail_image_url as url, 
     p.name as pName, 
     cate.name as cName, 
     c.quantity, 
     p.price, 
     p.id as pId, 
     c.user_id as userId
    FROM carts c
    JOIN products p
     ON p.id=c.product_id
    JOIN users u
    JOIN categories cate
     ON p.category_id=cate.id
    WHERE c.user_id=?`, [userId]
	)
  
}

module.exports = {
  listUpCart,
}