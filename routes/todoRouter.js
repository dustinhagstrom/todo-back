var express = require("express");
var router = express.Router();
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  updateTodoDone,
  updateTodoWords,
  sortTodoByDate,
  sortTodoByDone,
} = require("./controller/todoController");

router.get("/all-todos", getAllTodos);

router.get("/get-todos-by-sort", sortTodoByDate);

router.get("/sort-by-done", sortTodoByDone);

router.post("/create-todo", createTodo);

router.put("/update-todo/:id", updateTodo);

router.put("/update-todo-words/:id", updateTodoWords);

router.put("/update-done-by-id/:id", updateTodoDone);

router.delete("/delete-todo/:id", deleteTodo);

module.exports = router;
