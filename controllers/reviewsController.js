const { reviewsService } = require('../services')
const { catchAsync }  = require('../utils/error')

const postReviews = catchAsync(async (req, res) => {
    const {product_id} = req.params;
    const {content} = req.body;
    const user_id =  req.userId
    await reviewsService.postReviews( user_id, product_id, content);
    const review = await reviewService.getReview( user_id, product_id );   
    return res.status(200).json({ message: "Review Success", review: review });
})

module.exports = {
    postReviews
}