const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const  userService  = require('../services/userService');
const { catchAsync } = require('../utils/error');

const signUp = catchAsync(async (req, res) => {
    const { email, password, name, address } = req.body;
      
      await userService.signUp(email, password, name, address);
      
      res.status(201).json({ message : "SIGN_UP_SUCCESS"});
  
  })

  const checkUser = catchAsync(async (req, res) => {
    const { email } = req.body;
      
    const result = await userService.checkUser(email);

    if (!result) return res.status(200).json({ message : "EXCESS_SUCCESS"});

    res.status(200).json({ message : "KEY_ALREADY_EXISTS"});

  })

  const signIn = catchAsync(async (req, res) => {
	const { email, password } = req.body;

	const accessToken = await userService.signIn(email, password)

	res.status(200).json({ accessToken })

})

const deleteLike = catchAsync(async (req, res) => {
  const productId  = req.query.productId;
  const userId = req.userId;

  await userService.deleteLike(userId, productId);
    
  res.status(200).json({ message : "DELETELIKE_SUCCESS"});

})

const getLikeList = catchAsync(async (req, res) => {
  const { userId } = req;
    
    const likes = await userService.getLikeList(userId);
    
    res.status(200).json({ likes });

})

const getPoint = catchAsync(async (req, res) => {
  const userId = req.userId;
    
    const point = await userService.getPoint(userId);
    
    res.status(200).json({ message : point });

})

const getUserInfo = catchAsync(async (req, res) => {
  const userId = req.userId;
    
  const getUserInfo = await userService.getUserInfo(userId);
    
  res.status(200).json({ message : getUserInfo });

})

  module.exports = {
	  signUp,
    checkUser,
    signIn,
    deleteLike,
    getLikeList,
    getPoint,
    getUserInfo
}