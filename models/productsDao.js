const appDataSource = require('./dataSource')

const getProduct = async (productId) => {
    const result = await appDataSource.query(`
      SELECT
        p.id,
        p.name,
        p.price,
        p.stock,
        c.name as category_name,
        p.thumbnail_image_url,
        p.created_at,
        p.updated_at,
        JSON_ARRAYAGG(i.image_url) AS image_url
    FROM 
      products p
    JOIN 
      categories c
    ON  
      c.id = p.category_id
    JOIN
      product_images i
    ON
      p.id = i.product_id
    WHERE 
      p.id = ?`, [productId]
    )
    
    return result [0]
  };

module.exports = {
   getProduct
}