const { reviewsService } = require('../services')
const { catchAsync }  = require('../utils/error')

const getreviews = catchAsync(async (req, res) => {
    const {product_id} = req.params; 
    const reviews = await reviewsService.getreviews(product_id);

    return res.status(200).json({ data : reviews });
})

module.exports = {
    getreviews
}