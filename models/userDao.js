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
		WHERE email = ?) AS boolean;`,
      [email]
    )
	console.log(result.boolean)
	return result;
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

	return user
}
const deleteLike = async (userId, products) => {

    for(let i=0; i<products.length; i++){
        await dataSource.query(`
            DELETE FROM likes
            WHERE user_id = ? AND
                  product_id = ?      
        `,
        [userId, products[i].id]
        )
    }

    return;
}


module.exports = { 
	createUser,
    checkUser,
    getUserByEmail,
	deleteLike
}