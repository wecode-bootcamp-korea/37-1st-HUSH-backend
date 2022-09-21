const express = require('express');
const myPageController  = require('../controllers/myPageController');

const router = express.Router();

router.get('/like', myPageController.getLike);

module.exports = router;