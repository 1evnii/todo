const express = require('express');
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT.js");
const { createTodo, getTodos, updateTodo, deleteTodo, getTodoById } = require('../controllers/todo.controller.js');

router.post('/', verifyJWT, createTodo);

router.get('/', verifyJWT, getTodos);

router.get('/:id', verifyJWT, getTodoById);

router.put('/:id', verifyJWT, updateTodo);

router.delete('/:id', verifyJWT, deleteTodo);

module.exports = router;