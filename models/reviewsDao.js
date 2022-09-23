const appDataSource = require('./dataSource')

const getAllreviews = async () => {
    return await appDataSource.query(`
      SELECT
          reviews.id,
          reviews.content,
          reviews.user_id,
          reviews.created_at
        FROM reviews
        `)
  };

  module.exports = {
    getAllreviews
 }