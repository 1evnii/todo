const Todo = require("../models/todo.model.js");

const createTodo = async (req, res) => {
    try {
        const todo = await Todo.create({
        title: req.body.title,
        description: req.body.description,
        user_id: req.user
        });
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ user_id: req.user });
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findOne(
            { _id: req.params.id, user_id: req.user }
        );

        if (!todo) {
            return res.status(404).json({message: "Todo not found"});
        }

        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const updateTodo = async (req, res) => {
    try {

        const todo = await Todo.findOneAndUpdate(
            { _id: req.params.id, user_id: req.user },
            req.body,
            { new: true, runValidators: true }
        );

        if (!todo) {
            return res.status(404).json({message: "Todo not found"});
        }

        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findOneAndDelete({ _id: req.params.id, user_id: req.user });

        if (!todo) {
            return res.status(404).json({message: "Todo not found"});
        }

        res.status(200).json("Todo deleted successfully");
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo
};