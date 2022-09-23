const appDataSource = require('./dataSource')

const getAllProducts = async () => {
    return await appDataSource.query(`
      SELECT
          products.id,
          products.name,
          products.price,
          products.stock,
          products.thumbnail_image_url,
          products.updated_at,
          products.category_id,
          products.created_at
           FROM products
        `)
  };

  module.exports = {
    getAllProducts
 }