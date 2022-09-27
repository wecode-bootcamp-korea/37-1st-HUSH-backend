const appDataSource = require('./dataSource')

const getOrders = async ( user_id, product_id ) => {

    const [ orders ] = await appDataSource.query(
      // `SELECT
      //    *
      //  FROM orders
      //  WHERE user_id = ? AND product_id = ?`, 
      `select exists(
      select
       i.product_id  
       from orders o
       inner join users u 
       on o.user_id = u.id
       inner join order_items i
       on o.id = i.order_id
       where u.id = ?
       ) as product_id`,
    [user_id, product_id]
 )
 console.log( orders )
   return orders;   
}

module.exports = {
    getOrders
}

