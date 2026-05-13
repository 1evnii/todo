import TodoModel from "../models/TodoModel.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();

    res.status(200).json({
      message: "Todo list fetched successfully",
      todos,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { userId, title, description, startDate, endDate } = req.body;

    if (!userId || !title || !description || !startDate || !endDate) {
      return res.status(400).json({ message: "Fill all fields" });
    }

    const todo = new TodoModel({
      userId,
      title,
      description,
      startDate,
      endDate,
    });

    await todo.save();

    res.status(201).json({
      message: "Todo created",
      todo,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getTodoById = async (req, res) => {
  try {
    console.log(req.params.id)
    const todo = await TodoModel.find({userId: req.params.id});

    if (!todo) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const updated = await TodoModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      message: "Updated",
      todo: updated,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await TodoModel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const toggleStatus = async (req, res) => {
  try {
    const todo = await TodoModel.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Not found" });
    }

    todo.status = !todo.status;
    await todo.save();

    res.status(200).json({
      message: "Status changed",
      todo,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
