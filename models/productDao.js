const dataSource = require('./dataSource')

const getAllProducts = async () => {
  return await dataSource.query(`
    SELECT
        p.id,
        p.name,
        p.price,
        p.thumbnail_image_url,
        c.name AS category_id
    FROM 
      products p
    JOIN  categories c
    ON p.category_id = c.id
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

  if(typeof result.image_url == "string"){
    result.image_url = result.image_url.replace("[",'');
    result.image_url = result.image_url.replace("]",'');
    result.image_url = result.image_url.replace(/"/g,'');
    result.image_url = result.image_url.replace(/ /g,'');
    result.image_url = result.image_url.split(",");
  }

  return result

};

  const getcategoryProducts = async (categoryId) => {
    const result = await dataSource.query(`
      SELECT
        id,
        name,
        price,
        category_id,
        thumbnail_image_url
      FROM 
        products
      WHERE 
        category_id = ?`
    , [categoryId]
    )

    return result
    
};


module.exports = { 
    getAllProducts,
    getProduct,
    getcategoryProducts
}