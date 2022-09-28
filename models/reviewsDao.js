const appDataSource = require('./dataSource')

const checkUser = async (userId, productId) => {
 
    const [doesExist] = await dataSource.query(`
    SELECT EXISTS(
        SELECT 
            id
        FROM 
            reviews 
        WHERE 
            user_id = ? AND
            product_id = ?) AS boolean`,
    [userId, productId]
  )

    return doesExist.boolean;
    
  };

const modifyReview = async (userId, productId) => {
    
    const result = await appDataSource.query(`
      SELECT
          id,
          name
    FROM products
        WHERE name like ? `,[keyWord]
    )
    console.log(result)
    return result;
    
    
    
  };

module.exports = {
    checkUser, modifyReview
}