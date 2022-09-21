const myPageDao = require('../models/myPageDao');



const deleteLike = async (userId, products) => {

	return await myPageDao.deleteLike(userId, products);

}





module.exports = { 
    deleteLike
}