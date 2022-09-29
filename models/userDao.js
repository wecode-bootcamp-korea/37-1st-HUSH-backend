const dataSource = require('./dataSource')

const createUser = async (email, hashedPassword, name, address) => {

  return await dataSource.query(`
	  INSERT INTO users (
        email, password, name, address
		) VALUES (
				?,
				?, 
				?, 
				?
		)`,
    [email, hashedPassword, name, address]
  )
}

const checkUser = async (email) => {

    const [result] =  await dataSource.query(`
	SELECT EXISTS(
		SELECT *
		FROM users 
		WHERE email = ?) AS boolean`,
      [email]
    )

	return result.boolean;
  }
  
  const getUserByEmail = async (email) => {
	const [user] = await dataSource.query(`
		SELECT 
			id,
			name,
			email,
			password
		FROM users
		WHERE email=?`, [email]
	)

	return user;
}

const getPoint = async (userId) => {

	const [result] = await dataSource.query(`
		SELECT 
			point
		FROM 
			users
		WHERE users.id = ?`,
			[userId]
	)
	
	return result;s
}

const getUserInfo = async (userId) => {

	const [result] = await dataSource.query(`
		SELECT 
			id, 
			email, 
			name, 
			address, 
			point 
		FROM 
			users 
		WHERE 
			id = ?;`
		,[userId]
	)

	return result;
	
}
  

module.exports = { 
	createUser,
    checkUser,
    getUserByEmail,
	getPoint,
	getUserInfo
}