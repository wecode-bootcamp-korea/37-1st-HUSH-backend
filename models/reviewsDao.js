const appDataSource = require('./dataSource')

const getreviews = async (product_id) => {
    return await appDataSource.query(`
	select u.name, p.name, r.content, r.created_at
	from reviews r
	join users u
	on u.id=r.user_id
	join products p
	on p.id=r.product_id
	where product_id=?;
        `, [product_id])
  };


  module.exports = {
    getreviews
 }