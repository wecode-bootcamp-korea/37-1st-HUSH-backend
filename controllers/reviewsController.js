const { reviewsService } = require('../services')
const { catchAsync }  = require('../utils/error')

const postReviews = catchAsync(async (req, res) => {
    const {product_id} = req.params;
    const {content} = req.body;
    const user_id =  req.userId
    console.log(product_id, content)
    await reviewsService.postReviews( user_id, product_id, content);    
    const reviews = await reviewsService.getReviewExists( product_id, user_id );   
    
    return res.status(200).json({ message: "Review Success", reviews : reviews });
})

module.exports = {
    postReviews
}