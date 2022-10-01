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

  const getAllProducts = async (productId) => {
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
  }

module.exports = {
   getcategoryProducts,
   getAllProducts,
   getProduct
}