const dataSource = require('./dataSource')

const getCart = async (userId) => {

    const result = await dataSource.query(`
		SELECT 
			product_id,
            quantity
		FROM carts
		WHERE id = userId`, [userId]
	)
    return result;
  }



const createOrder = async (userId, reqMessage, address) => {

  await dataSource.query(`
	  INSERT INTO orders (
        user_id,
        req_message,
        address
		) VALUES (
		        ?,
                ?,
                ?
		)`,
    [userId, reqMessage, address]
  )

  const orderId = await dataSource.query(`
    SELECT 
    order_id
    FROM orders
    WHERE id = userId`, [userId]
    )

    return orderId[length-1].order_id;
}

const createOrderItems = async (orderId, products) => {    

    for(let i=0; i<products.length; i++){
        await dataSource.query(`
        INSERT INTO orders (
            order_id,
            product_id,
            quantity
            ) VALUES (
                    ?,
                    ?,
                    ?
            )`,
        [orderId, products[i].product_id, products[i].quantity]
        )    
    }

    return;
}

const deleteCart = async (products) => {    

    for(let i=0; i<products.length; i++){
        await dataSource.query(`
        UPDATE cart 
        SET quantity = quentity - ? 
        WHERE id = ?`,
        [products[i].quantity, products[i].id]
        )    
    }

    return;

}

const deductPoint = async (userId, total) => {    
    
    return await dataSource.query(`
        UPDATE users 
        SET point = point - ? 
        WHERE id = ?`,
        [total, userId]
    )

}


module.exports = {
    createOrder,
    createOrderItems,
    deleteCart,
    deductPoint
}