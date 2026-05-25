const express = require('express');
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const { createUser, login, getUser, updateUser, deleteUser } = require('../controllers/user.controller.js');

router.post('/', createUser);

//router.get('/', verifyJWT, getUsers);

router.post('/login', login);

router.get('/', verifyJWT, getUser);

router.put('/', verifyJWT, updateUser);

router.delete('/', verifyJWT, deleteUser);

module.exports = router;