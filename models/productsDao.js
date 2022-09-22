const appDataSource = require('./dataSource')

const getAllProducts = async () => {
    return await appDataSource.query(`
      SELECT
          *
        FROM products
        `)
  };
  
  module.exports = {
    getAllProducts
 }