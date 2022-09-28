const { likeService }  = require('../services');
const { catchAsync } = require('../utils/error.js')

const deleteLike = catchAsync(async (req, res) => {
    const productId  = req.query.productId;
    const userId = req.userId;
  
    await likeService.deleteLike(userId, productId);
      
    res.status(200).json({ message : "DELETELIKE_SUCCESS"});
  
  })
  
  const getLikeList = catchAsync(async (req, res) => {
    const { userId } = req;
      
      const likes = await likeService.getLikeList(userId);
      
      res.status(200).json({ likes });
  
  })
  module.exports = {
    deleteLike,
    getLikeList

}
  