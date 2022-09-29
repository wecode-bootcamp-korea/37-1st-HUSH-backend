const { likeService }  = require('../services');
const { catchAsync } = require('../utils/error.js')

const deleteLike = catchAsync(async (req, res) => {
    const productId  = req.query.productId;
    const userId = req.userId;
  
    await likeService.deleteLike(userId, productId);
      
    return res.status(200).json({ message : "DELETELIKE_SUCCESS"});
  
  })
  
const getLikeList = catchAsync(async (req, res) => {
  const userId = req.userId;
    
  const likes = await likeService.getLikeList(userId);
    
  return res.status(200).json({ message : likes });

})

const inputLike = catchAsync(async (req, res) => {
    
  const userId = req.userId;
  const productId = req.params.productId;
    
  await likeService.inputLike(userId, productId);
    
  return res.status(201).json({ message : "INPUTLIKE_SUCCESS"});

})
  module.exports = {
    deleteLike,
    getLikeList,
    inputLike

}
  