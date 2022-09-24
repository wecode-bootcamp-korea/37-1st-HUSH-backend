const { reviewsService } = require('../services')
const { catchAsync }  = require('../utils/error')

const getreviews = catchAsync(async (req, res) => {
    // console.log(req.params)
    const {product_id} = req.params; 
    // console.log(product_id)
    const reviews = await reviewsService.getreviews(product_id);
    // console.log(reviews);
    return res.status(200).json({ data : reviews });
})

module.exports = {
    getreviews
}