const appDataSource = require('./dataSource')

  const getcategoryProducts = async (categoryId) => {
    const result = await appDataSource.query(`
      SELECT
          p.id,
          p.name,
          p.price,
          p.stock,
          c.name AS category_id,
          p.thumbnail_image_url,
          p.created_at,
          p.updated_at
        FROM products p
        join categories c
        on p.category_id = c.id
        WHERE category_id = ?`, [categoryId]
    )
    
    return result
  };

module.exports = {
   getcategoryProducts
}