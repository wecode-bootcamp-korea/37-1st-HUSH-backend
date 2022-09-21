const express = require('express');
const myPageController  = require('../controllers/myPageController');
const { validToken } = require('../utils/auth');

const router = express.Router();

router.delete('/deletelike', validToken, myPageController.deleteLike); //엔드포인토에서 동사로 delete는 괜찮은가요?


module.exports = router;