const reviewsService = require('../services/reviewsService')
const { catchAsync }  = require('../utils/error')

const modifyReview = catchAsync(async (req, res) => {

    const userId = req.userId;
    
    const productId = req.params.productId;

    const content = req.body.content;
    
    await reviewsService.modifyReview(userId, productId, content)

    res.status(200).json({ message : 'MODIFYREVIEW_SUCCESS' })
})

module.exports = {
    modifyReview
}