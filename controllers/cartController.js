const { cartService } = require('../services');

const addCart = async (req, res) => {
  const { productId, quantity, userId } = req.body; //엑세스 토큰 활성화 시 userId 제거
  // const userId = req.user.id;  //엑세스 토큰 활성화 시 주석 제거 (productRouter - loginRequired 활성화 시)

  try {
    const addCart = await cartService.addCart(userId, productId, quantity);

    res.status(201).json({ addCart });
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
};

const listUpCart = async (req, res) => {
  const { productId, quantity, userId } = req.body;

  try{
    const listUpCart = await cartService.listUpCart(userId, productId, quantity);

    res.status(201).json({ listUpCart });
  }catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
};

module.exports = {
  addCart,
  listUpCart,
};