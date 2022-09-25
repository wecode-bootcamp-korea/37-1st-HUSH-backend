const appDataSource = require('./dataSource')

const postReviews = async (product_id) => {
	const results = await appDataSource.query(`
		INESRT INTO reviews(
			user_id,
			content,
			created_at
		) VALUES (?, ?, ?);
			`, [product_id]
	);

	return results
}

// app.post('/post', async (req, res, next) => {
// 	const { title, content, userid } = req.body
// 	await appDataSource.query(
// 	  `INSERT INTO posts(
// 		title,
// 		content,
// 		user_id
// 		) VALUES (?, ?, ?);
// 		`,
// 		[ title, content, userid ]
// 	  );
// 	   res.status(201).json({ message : 'successfully created'});
// 	  })

module.exports = {
    postReviews
}
