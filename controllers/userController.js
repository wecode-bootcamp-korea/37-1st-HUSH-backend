const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const  { userService }  = require('../services');
const { catchAsync } = require('../utils/error');

const signUp = catchAsync(async (req, res) => {

  const { email, password, name, address } = req.body;
    
  await userService.signUp(email, password, name, address);
    
  return res.status(201).json({ message : "SIGN_UP_SUCCESS"});
  
})

const checkUser = catchAsync(async (req, res) => {
  const { email } = req.body;
    
  const result = await userService.checkUser(email);

  if (+result) return res.status(400).json({ message : "KEY_ALREADY_EXISTS"});

  return res.status(200).json({ message : "EXCESS_SUCCESS"});

})

const signIn = catchAsync(async (req, res) => {

	const { email, password } = req.body;

	const accessToken = await userService.signIn(email, password)

	return res.status(200).json({ accessToken })

})



const getPoint = catchAsync(async (req, res) => {
  const userId = req.userId;
    
  const point = await userService.getPoint(userId);
    
  return res.status(200).json({ message : point });

})

const getUserInfo = catchAsync(async (req, res) => {

  const userId = req.userId;
    
  const getUserInfo = await userService.getUserInfo(userId);
    
  return res.status(200).json({ message : getUserInfo });

})

  module.exports = {
	  signUp,
    checkUser,
    signIn,
    getPoint,
    getUserInfo
}