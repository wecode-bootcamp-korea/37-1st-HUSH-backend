const { CustomRepositoryCannotInheritRepositoryError } = require('typeorm');
const appDataSource = require('./dataSource')

const checkUser = async (userId, productId) => {
 
    const [doesExist] = await appDataSource.query(`
    SELECT EXISTS(
        SELECT 
            id
        FROM 
            reviews 
        WHERE 
            user_id = ? AND
            product_id = ?) AS boolean`,
    [userId, productId]
  )

    return doesExist.boolean;
    
  };

const modifyReview = async (userId, productId, content) => {
    console.log(content);
    await appDataSource.query(`
        UPDATE
            reviews
        SET
            content = ?
        WHERE 
            user_id = ? AND
            product_id = ?
        `,[ content, userId, productId ]
    )
    
    return;

    
};

module.exports = {
    checkUser, modifyReview
}