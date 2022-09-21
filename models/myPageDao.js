const dataSource = require('./dataSource')

const deleteLike = async (userId, products) => {

    for(let i=0; i<products.length; i++){
        await dataSource.query(`
            DELETE FROM likes
            WHERE user_id = ? AND
                  product_id = ?      
        `,
        [userId, products[i].id]
        )
    }

    return;

}

module.exports = { 
    deleteLike
}