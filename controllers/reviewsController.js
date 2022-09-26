const { reviewsService } = require('../services')
const { catchAsync }  = require('../utils/error')

const postReviews = catchAsync(async (req, res) => {
    // console.log(req.userId)
    const { user_id, product_id, content } = req.body; 
    await reviewsService.postReviews( user_id, product_id, content);
    //await reviewsService.postReviews(user_id, product_id, content)
    return res.status(200).json({ message });
})

module.exports = {
    postReviews
}