const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userDao = require('../models/userDao');

const validatePassword = (password) => {
	const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

	if (!passwordRegex.test(password)) {
		const error = new Error('INVALID_PASSWORD')
		error.statusCode = 400

		throw error
	}
}

const hashPassword = async (plaintextPassword) => {
	const saltRounds = 10; 
	const salt = await bcrypt.genSalt(saltRounds);
	
	return await bcrypt.hash(plaintextPassword, salt);
}

const signUp = async (email, password, name, address) => {

	validatePassword(password)

	const hashedPassword = await hashPassword(password)

	return await userDao.createUser(email, hashedPassword, name, address)
}


module.exports = { 
    signUp
}