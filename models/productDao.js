const dataSource = require('./dataSource')

const checkLike = async (userId, productId) => {

    const [doesExist] = await dataSource.query(`
    SELECT EXISTS(
        SELECT 
            id
        FROM 
            likes 
        WHERE 
            user_id = ? AND
            product_id = ?) AS boolean`,
    [userId, productId]
  )

  return doesExist.boolean;

}

const inputLike = async (userId, productId) => {
    return await dataSource.query(`
    INSERT INTO likes (
      user_id, product_id
      ) VALUES (
              ?,
              ?
      )`,
  [userId, productId]
    )
}

module.exports = { 
    checkLike,
    inputLike
}