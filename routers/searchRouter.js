const express = require('express');
const searchController  = require('../controllers/searchController');

const router = express.Router();

router.get('/:keyword', searchController.getItems);


module.exports = router;