const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const  userService  = require('../services/userService');
const userDao = require('../models/userDao')

const signUp = async (req, res) => {
    const { email, password, name, address } = req.body;
      
      await userService.signUp(email, password, name, address);
      
      res.status(201).json({ message : "SIGN_UP_SUCCESS"});
  
  }

  const checkUser = async (req, res) => {
    const { email } = req.body;
      
    result = await userService.checkUser(email);

    if (result.length == 0)  res.status(200).json({ message : "EXCESS_SUCCESS"});

    res.status(400).json({ message : "KEY_ALREADY_EXISTS"});

  }

  
const signIn = async (email, password) => {

	const user = await userDao.getUserByEmail(email)

	const match = await bcrypt.compare(password, user.password);

	if (!match) {
		const error = new Error('WRONG_PASSWORD')
		error.statusCode = 401

		throw error
	}

	const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET)

	return accessToken

}

  module.exports = {
	signUp,
    checkUser,
    signIn
}
  
