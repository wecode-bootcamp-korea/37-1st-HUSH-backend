const { UsingJoinColumnOnlyOnOneSideAllowedError } = require('typeorm');
const dataSource = require('./dataSource');

const checkPoint = async (userId, total) => {    

    const [result] = await dataSource.query(`
        SELECT 
            point 
        FROM 
            users 
        WHERE id = ?`,
        [userId]
    )

    return result.point
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
            id
        FROM orders
        WHERE user_id = ?`, [userId]
        )

        return orderId[orderId.length-1].id;

}

const getCart= async (userId, productId) => {

    const items = await dataSource.query(`
        SELECT 
            product_id,
            quantity
        FROM 
            carts
        WHERE 
            user_id = ? AND product_id in (?)`
    ,[userId, productId]
    )

    return items;

  }

const createOrderItems = async (orderId, items) => {    

    for(let i=0; i<items.length; i++){
        await dataSource.query(`
        INSERT INTO order_items (
            order_id,
            product_id,
            quantity
            ) VALUES (
                    ?,
                    ?,
                    ?
            )`,
        [orderId, items[i].product_id, items[i].quantity]
        )    
    }

    return;
}

const deleteCart = async (userId, items) => {    
    for(let i=0; i<items.length; i++){
        await dataSource.query(`
        DELETE FROM 
            carts
        WHERE 
            user_id = ? AND 
            product_id = ?`
         ,
        [userId, items[0].product_id]
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

const checkStock = async (productId) => {    

    const result = await dataSource.query(`
        SELECT stock, name
        FROM products p 
        WHERE id in ?`,
    [productId]
    )

    return result;

}


const deleteProductStock = async (items) => {    
    for(let i=0; i<items.length; i++){
        await dataSource.query(`
            UPDATE products 
            SET stock = stock - ? 
            WHERE id = ?`,
        [items[i].quantity, items[i].product_id]
        )
    }
    
    return;

}

module.exports = {
    checkPoint,
    createOrder,
    getCart,
    createOrderItems,
    deleteCart,
    deductPoint,
    checkStock,
    deleteProductStock,
}
