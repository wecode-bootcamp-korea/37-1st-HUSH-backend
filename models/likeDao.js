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

  const checkLike = async (userId, productId) => {

    const [doesExist] = await dataSource.query(`
    SELECT EXISTS(
        SELECT 
            id
        FROM 
            likes 
        WHERE 
            user_id = ? AND
            product_id = ?) AS boolean`,
    [userId, productId]
  )

  return doesExist.boolean;

}

const inputLike = async (userId, productId) => {
    return await dataSource.query(`
    INSERT INTO likes (
      user_id, product_id
      ) VALUES (
              ?,
              ?
      )`,
  [userId, productId]
    )
}



module.exports = {
    deleteLike,
    getLikeList,
	checkLike,
	inputLike
}