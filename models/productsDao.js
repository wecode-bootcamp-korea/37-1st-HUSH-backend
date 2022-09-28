const appDataSource = require('./dataSource')

const getAllProducts = async () => {
    return await appDataSource.query(`
      SELECT
          p.id,
          p.name,
          p.price,
          p.stock,
          p.thumbnail_image_url,
          p.updated_at,
          c.name AS category_id,
          p.created_at
           FROM products p
          join categories c
          on p.category_id = c.id
        `)
  };

const getProduct = async (productId) => {
    const [result] = await appDataSource.query(`
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
    
    return result
  };

module.exports = {
   getAllProducts,
   getProduct
}

