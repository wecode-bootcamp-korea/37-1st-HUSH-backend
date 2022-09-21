const dataSource = require('./dataSource')

const getLike = async (userId) => {
    
  return await dataSource.query(`
    SELECT 
        products.name as productName, 
        products.price, 
        categories.name as categoryName
    FROM 
        products,
        categories, 
        likes 
    WHERE 
        likes.product_id = products.id AND 
        categories.id = products.category_id AND 
        likes.user_id = ?`,
        [userId]
  )
}


module.exports = { 
    getLike
}