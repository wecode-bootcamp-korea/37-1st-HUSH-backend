const appDataSource = require('./dataSource')

const getItems = async (keyWord) => {

    keyWord = keyWord + '%'
    
    const result = await appDataSource.query(`
      SELECT
          id,
          name
    FROM products
        WHERE name like ? `,[keyWord]
    )
    console.log(result)
    return result;
    
  };

module.exports = {
    getItems
}