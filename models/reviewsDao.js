const postReviews = async (productId) => {
	const results = await dataSource.query(`
		SELECT 
			`, [userId]
	)

	return results
}

app.post('/post', async (req, res, next) => {
	const { title, content, userid } = req.body
	await appDataSource.query(
	  `INSERT INTO posts(
		title,
		content,
		user_id
		) VALUES (?, ?, ?);
		`,
		[ title, content, userid ]
	  );
	   res.status(201).json({ message : 'successfully created'});
	  })

module.exports = {
    getReviews
}
