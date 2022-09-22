const { cartService } = require('../services');

const addCart = async (req, res) => {
  const { productId, quantity, userId } = req.body; //엑세스 토큰 활성화 시 userId 제거
  // const userId = req.user.id;  //엑세스 토큰 활성화 시 주석 제거 (productRouter - loginRequired 활성화 시)
  // console.log(req.body)    //데이터 확인용

  try {
    // const insertId = await productService.createCart(title, content, userId);
    const addCart = await cartService.addCart(userId, productId, quantity);

    res.status(201).json({ addCart });
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
};

module.exports = {
  addCart,
};