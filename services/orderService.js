const datasource = require('../models/dataSource');
const { orderDao } = require('../models');
const queryRunner = datasource.createQueryRunner();

const createOrder = async (userId, productId, total, reqMessage, address) => {
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    // execute some operations on this transaction:
    const result = await orderDao.createOrder(queryRunner, userId);

    // commit transaction now:
    await queryRunner.commitTransaction();
  } catch (err) {
    // since we have errors let's rollback changes we made
    await queryRunner.rollbackTransaction();
  } finally {
    // you need to release query runner which is manually created:
    await queryRunner.release();
  }

  return;
};

const getCartInfo = async (userId, productId) => {
  return await orderDao.getCartInfo(userId, productId);
};

module.exports = {
  createOrder,
  getCartInfo,
};
