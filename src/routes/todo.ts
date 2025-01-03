import { Router } from "express";
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controllers/todo";

const router=Router();

router.get("/", getTodo); // Get all todos
router.post("/", createTodo); // Create a new todo
router.patch("/:todoId",updateTodo);
router.delete("/:todoId",deleteTodo);

export default router;
