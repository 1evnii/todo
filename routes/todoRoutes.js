import express from "express";
import {
  getTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
  toggleStatus,
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);

router.get("/:id", getTodoById);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

router.post("/:id/toggle-status", toggleStatus);

export default router;
