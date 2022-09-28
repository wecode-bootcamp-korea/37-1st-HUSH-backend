const dataSource = require('./dataSource')

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

const getAllProducts = async () => {
    return await dataSource.query(`
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
    const [result] = await dataSource.query(`
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
    checkLike,
    inputLike,
    getAllProducts,
    getProduct
}