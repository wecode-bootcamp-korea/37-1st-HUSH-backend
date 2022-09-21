const myPageDao = require('../models/myPageDao.js');


const getLike = async (userId) => {

	return await myPageDao.getLike(userId);
    
}



module.exports = { 
    getLike
}