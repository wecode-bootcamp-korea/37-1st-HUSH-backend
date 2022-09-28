const dataSource = require('./dataSource');


const getCartInfo = async (userId, productId) => {    

    const result = await dataSource.query(`
        SELECT
            carts.user_id,
            p.name,
            p.id as product_id,
            p.price,
            carts.quantity,
            c.name as category_name,
            p.thumbnail_image_url
        FROM 
            products p
        INNER JOIN 
            categories c
        ON
            p.category_id = c.id
        INNER JOIN
            carts
        on
            p.id = carts.product_id
        WHERE 
            carts.user_id = ? AND
            p.id in (?)
    `, [userId, productId]
    )

    return result;
}

module.exports = {
    getCartInfo
}
