const { reviewsService } = require('../services')
const { catchAsync }  = require('../utils/error')

const getAllreviews = catchAsync(async (req, res) => {
    
    const reviews = await reviewsService.getAllreviews();

    return res.status(200).json({ data : reviews });
})

module.exports = {
    getAllreviews
}