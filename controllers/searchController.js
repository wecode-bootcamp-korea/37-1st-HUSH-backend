const { searchService } = require('../services')
const { catchAsync }  = require('../utils/error')

const getItems = catchAsync(async (req, res) => {
    
    const keyWord = req.query.keyword;

    if(keyWord == '') return res.status(200).json({ message : [] })
    
    const items = await searchService.getItems(keyWord)

    return res.status(200).json({ message : items })
})

module.exports = {
    getItems
}