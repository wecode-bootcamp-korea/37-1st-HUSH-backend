const dataSource = require('./dataSource')

const deleteLike = async (userId, productId) => {

	await dataSource.query(`
	DELETE FROM 
		likes
	WHERE 
		user_id= ? AND
		product_id in (?)`, 
		[userId, productId]
	)

	return;

}


const getLikeList = async (userId) => {
    
	return await dataSource.query(`
	  SELECT 
		  products.id as productId, 
		  products.name as productName, 
		  products.price,
		  products.thumbnail_image_url,
		  categories.name as categoryName 
	  FROM 
		  products 
	  INNER JOIN likes ON
		  likes.product_id = products.id  
	  INNER JOIN categories ON
		  categories.id = products.category_id 
	  WHERE likes.user_id = ?`,
		  [userId]
	)
  }


module.exports = {
    deleteLike,
    getLikeList
}