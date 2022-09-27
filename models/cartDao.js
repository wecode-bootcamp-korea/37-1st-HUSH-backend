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
      p.id as product_id,
      p.price,
      carts.quantity,
      c.name as category_name,
      p.thumbnail_image_url
    FROM 
      products p
    INNER JOIN 
      categories c
    ON
      p.category_id = c.id
    INNER JOIN
      carts
    on
      p.id = carts.product_id
    WHERE 
      p.id in (?)
  `, [productId]
  )
  const result =[];
  result.push(userInfo);
  result.push(cartInfo);

  return result;
}

const addCart = async (product_id, quantity, userId) => {
	const result = await dataSource.query(`
		INSERT INTO carts (
			user_id,
			product_id,
			quantity
		) VALUES (
			?,
			?,
			?
		)`, [userId, product_id, quantity]
	)

	return result.insertId
}

const listUpCart = (userId) => {
	return appDataSource.query(`
    SELECT
	p.thumbnail_image_url as url,
	p.name as pName,
	cate.name as cateName,
	c.quantity,
	p.price,
	p.id as pId
    FROM carts c
    LEFT JOIN products p ON p.id=c.product_id
    JOIN categories cate
    WHERE c.user_id=? and cate.id=category_id;`, [userId]
	)
  
}

module.exports = {
	orderList,
	addCart,
  listUpCart
}