const appDataSource = require('./dataSource')

const getProduct = async (productId) => {
    const result = await appDataSource.query(`
      SELECT
          p.id,
          p.name,
          p.price,
          p.stock,
          c.name AS category_Name,
          p.thumbnail_image_url,
          p.created_at,
          p.updated_at,
          pi.image_url
        FROM products p 
        join categories c
        on p.category_id = c.id
        join product_images pi
        on p.id = pi.product_id 
        WHERE p.id = ?`, [productId]
    )
    
    return result [0]
  };

module.exports = {
   getProduct
}