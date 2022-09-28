const dataSource = require('./dataSource')

const getItems = async (keyWord) => {

    keyWord = keyWord + '%'
    
    const result = await dataSource.query(`
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