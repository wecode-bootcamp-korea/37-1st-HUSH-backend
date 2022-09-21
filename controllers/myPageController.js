const  myPageService  = require('../services/myPageService');
const { catchAsync } = require('../utils/error')

const deleteLike = catchAsync(async (req, res) => {
    const { userId, products } = req.body;
      
      await myPageService.deleteLike(userId, products);
      
      res.status(203).json({ message : "DELETE_SUCCESS"});
  
  })



  module.exports = {
	deleteLike
}