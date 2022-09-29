const { reviewService } = require('../services')
const { catchAsync }  = require('../utils/error')

const postReview = catchAsync(async (req, res) => {
    const { productId } = req.params;

    const content = req.body.content;

    const userId =  req.userId

    await reviewService.postReview( userId, productId, content);    
   
    return res.status(200).json({ message: "REVIEW_SUCCESS"});
})

const modifyReview = catchAsync(async (req, res) => {

    const userId = req.userId;
    
    const productId = req.params.productId;

    const content = req.body.content;
    
    await reviewService.modifyReview(userId, productId, content)

    return res.status(200).json({ message : 'MODIFYREVIEW_SUCCESS' })
})

const getReviews = catchAsync(async (req, res) => {
    const {productId} = req.params; 
    const reviews = await reviewService.getReviews(productId);

    return res.status(200).json({ message : reviews });
})

module.exports = {
    postReview,
    getReviews,
    modifyReview
}