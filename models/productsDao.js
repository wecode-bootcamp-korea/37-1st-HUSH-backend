const appDataSource = require('./dataSource')

  const getcategoryProducts = async (categoryId) => {
    const result = await appDataSource.query(`
      SELECT
          id,
          name,
          price,
          stock,
          category_id,
          thumbnail_image_url,
          created_at,
          updated_at
        FROM products
        WHERE category_id = ?`, [categoryId]
    )
    
    return result
  };

module.exports = {
   getcategoryProducts
}