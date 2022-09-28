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

  module.exports = {
    getAllProducts
 }