const datasource = require('../models/dataSource');
const orderDao = require('../models/orderDao.js');
const queryRunner = datasource.createQueryRunner();

const createOrder = async (userId, productId, total, reqMessage, address) => {

    await queryRunner.connect();
    await queryRunner.startTransaction();
    
    try{
        userPoint = await orderDao.checkPoint(userId, total);

        if(userPoint < total){
            const error = new Error("LACK_OF_POINT")
            error.statusCode = 400;
            throw error;
        }
        const orderId = await orderDao.createOrder(userId, reqMessage, address);
        const items = await orderDao.getCart(userId, productId);
        await orderDao.createOrderItems(orderId, items);
        await orderDao.deductPoint(userId, total);
        await orderDao.checkStock(productId);
        await orderDao.deleteProductStock(items);
        await orderDao.deleteCart(userId, items);
        

        await queryRunner.commitTransaction();


    } catch (err) {
        await queryRunner.rollbackTransaction();
        const error = new Error('ROLLBACK' +' : ' + err.message);
		error.statusCode = 400;
		throw error
        
    } finally {
        // you need to release query runner which is manually created:
        //return await queryRunner.release();
        
    }
	
}
module.exports = { 
    createOrder
}