const { reviewsService } = require('../services')
const { catchAsync }  = require('../utils/error')

const postReviews = catchAsync(async (req, res) => {
    const {product_id} = req.params;
    const content = req.body.content;
    const user_id =  req.userId
    await reviewsService.postReviews( user_id, product_id, content);    
   
    return res.status(200).json({ message: "Review_Success"});
})

module.exports = {
    postReviews
}