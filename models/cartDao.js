const dataSource = require('./dataSource');

const upsertCart = async (product_id, quantity, userId) => {
  return await dataSource.query(
    `
	INSERT INTO carts(
		user_id,
		product_id,
		quantity
	) VALUES (
		?,
		?,
		?
	) ON DUPLICATE KEY UPDATE 
		quantity = quantity + ?
	`,
    [userId, product_id, quantity, quantity]
  );
};

const listUpCart = (userId) => {
  return dataSource.query(
    `
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
	WHERE c.user_id=? and cate.id=category_id;`,
    [userId]
  );
};

const listDelete = async (productId, userId) => {
  return await dataSource.query(
    `
	DELETE FROM carts
	WHERE
	user_id=? AND 
	product_id IN (?);`,
    [userId, productId]
  );
};

const quantControl = async (productId, quantity, userId) => {
  return dataSource.query(
    `
	UPDATE 
		carts
	SET 
		quantity= quantity + ?
	WHERE 
		product_id=? AND 
		user_id=?`,
    [quantity, productId, userId]
  );
};

module.exports = {
  addCart,
  listUpCart,
  listDelete,
  quantControl,
};

