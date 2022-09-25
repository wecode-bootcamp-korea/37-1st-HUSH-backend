const { reviewsService } = require('../services')
const { catchAsync }  = require('../utils/error')

const postReviews = catchAsync(async (req, res) => {
    const {product_id} = req.params; 
    const reviews = await reviewsService.postReviews(product_id);

    return res.status(200).json({ data : reviews });
})

module.exports = {
    postReviews
}