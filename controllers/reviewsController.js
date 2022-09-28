const { reviewsService } = require('../services')
const { catchAsync }  = require('../utils/error')

const postReviews = catchAsync(async (req, res) => {
    const {product_id} = req.params;
    const content = req.body.content;
    const user_id =  req.userId
   await reviewsService.postReviews( user_id, product_id, content);    
   
    return res.status(200).json({ message: "Review_Success"});
})

const modifyReview = catchAsync(async (req, res) => {

    const userId = req.userId;
    
    const productId = req.params.productId;

    const content = req.body.content;
    
    await reviewsService.modifyReview(userId, productId, content)

    res.status(200).json({ message : 'MODIFYREVIEW_SUCCESS' })
})

const getreviews = catchAsync(async (req, res) => {
    const {product_id} = req.params; 
    const reviews = await reviewsService.getreviews(product_id);

    return res.status(200).json({ data : reviews });
})

module.exports = {
    getreviews,
    modifyReview,
    postReviews
}