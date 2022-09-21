const  myPageService  = require('../services/myPageService');
const { catchAsync } = require('../utils/error')

const getLike = catchAsync(async (req, res) => {
    const { userId } = req.body;
      
      const likes = await myPageService.getLike(userId);
      
      res.status(201).json({ likes : likes});
  
  })


  module.exports = {
    getLike
}