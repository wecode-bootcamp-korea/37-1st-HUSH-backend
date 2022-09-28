const reviewsService = require('../services/reviewsService')
const { catchAsync }  = require('../utils/error')

const modifyReview = catchAsync(async (req, res) => {

    const userId = req.userId;
    
    const productId = req.params.productId;
    
    const items = await reviewsService.getItems(userId, productId)

    res.status(200).json({ message : 'MODIFYREVIEW_SUCCESS' })
})

module.exports = {
    modifyReview
}