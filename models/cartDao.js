const { UsingJoinColumnIsNotAllowedError } = require('typeorm')
const appDataSource = require('./dataSource')

const orderList = async (userId, productId) => {
	const [userInfo] = await appDataSource.query(`
    SELECT
      name,
      address,
      email
    FROM 
      users
    WHERE
      id = ?
    `, [userId]
	)

  console.log(productId);
  const cartInfo = await appDataSource.query(`
    SELECT
      p.name,
      p.price,
      p.stock,
      c.name as category_name,
      p.thumbnail_image_url
    FROM 
      products p
    INNER JOIN 
      categories c
    ON
      p.category_id = c.id
    WHERE 
      p.id in (?)
  `, [productId]
  )
  const result =[];
  result.push(userInfo);
  result.push(cartInfo);
  
  return result;
}

module.exports = {
  orderList
}
