const { reviewService } = require('../services')
const { catchAsync }  = require('../utils/error')

const postReview = catchAsync(async (req, res) => {
    const {product_id} = req.params;
    const content = req.body.content;
    const user_id =  req.userId
   await reviewService.postReview( user_id, product_id, content);    
   
    return res.status(200).json({ message: "Review_Success"});
})

const modifyReview = catchAsync(async (req, res) => {

    const userId = req.userId;
    
    const productId = req.params.productId;

    const content = req.body.content;
    
    await reviewService.modifyReview(userId, productId, content)

    res.status(200).json({ message : 'MODIFYREVIEW_SUCCESS' })
})

const getReviews = catchAsync(async (req, res) => {
    const {product_id} = req.params; 
    const reviews = await reviewService.getreviews(product_id);

    return res.status(200).json({ data : reviews });
})

module.exports = {
    postReview,
    getReviews,
    modifyReview
}