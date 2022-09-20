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

module.exports = { 
	createUser,
    checkUser
}