const dataSource = require('./dataSource');

// const getPostById = async (postId) => {
//   const result = await dataSource.query(
//     `
// 		SELECT 
// 			id,
// 			title,
// 			content,
// 			user_id,
// 			created_at,
// 			updated_at
// 		FROM posts
// 		WHERE id = ?`,
//     [postId]
//   );
// 
//   return result[0];
// };

const addCart = async (userId, porductId, quantity) => {
  const result = await dataSource.query(
    `
		INSERT INTO carts (
			user_id,
			product_id,
			quantity
		) VALUES (
			?,
			?,
			?
		)`,
    [userId, porductId, quantity]
  );

  return result.insertId;
}

module.exports = {
	addCart,
}