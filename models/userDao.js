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

    return await dataSource.query(`
        SELECT email
        FROM users
        WHERE email = ? 
        `,
      [email]
    )
  }

  const getUserByEmail = async (email) => {
	const [user] = await dataSource.query(`
		SELECT 
			id
			name,
			email,
			password
		FROM users
		WHERE email=?`, [email]
	)

	return user
}

module.exports = { 
	createUser,
    checkUser,
    getUserByEmail
}