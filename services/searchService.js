const { searchDao } = require('../models')

const getItems = async (keyWord) => {
    return await searchDao.getItems(keyWord)
}

module.exports = {
    getItems
}