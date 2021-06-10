var express = require("express");
var router = express.Router();
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("./controller/todoController");

router.get("/all-todos", getAllTodos);

router.post("/create-todo", createTodo);

router.put("/update-todo/:id", updateTodo);

router.delete("/delete-todo/:id", deleteTodo);

module.exports = router;
