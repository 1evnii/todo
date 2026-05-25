const express = require('express');
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT.js");
const { handleRefreshToken } = require('../controllers/refresh.controller.js');

router.post('/', handleRefreshToken);

module.exports = router;