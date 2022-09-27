const appDataSource = require('./dataSource')

const getOrders = async ( user_id, product_id ) => {

    const [ orders ] = await appDataSource.query(
    `SELECT
       *
    FROM order_items
    WHERE user_id = ? AND product_id = ?`,
    [user_id, product_id]
 )
   return orders;   
}

module.exports = {
    getOrders
}

