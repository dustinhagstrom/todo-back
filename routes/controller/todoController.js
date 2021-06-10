const Todo = require("../model/Todo");

async function getAllTodos(req, res) {
  try {
    let foundTodos = await Todo.find({});
    res.json({ message: "success", payload: foundTodos });
  } catch (e) {
    res.status(500).json({ message: "failure", error: e.message });
  }
}

async function createTodo(req, res) {
  let { todo, isDone } = req.body;
  try {
    let newTodo = await new Todo({
      todo: todo,
      isDone: isDone,
    });

    let savedTodo = await newTodo.save();
    res.json({ message: "success", payload: savedTodo });
  } catch (e) {
    res.status(500).json({ message: "failure", error: e.message });
  }
}

async function updateTodo(req, res) {
  let { todo, isDone } = req.body;
  let { id } = req.params;
  try {
    let updatedTodo = await Todo.findByIdAndUpdate(
      { _id: id },
      { todo: todo, isDone: isDone },
      { new: true }
    );
    res.json({ message: "success", payload: updatedTodo });
  } catch (e) {
    res.status(500).json({ message: "failure", error: e.message });
  }
}

async function deleteTodo(req, res) {
  let { id } = req.params;
  try {
    let deletedTodo = await Todo.findByIdAndRemove({ _id: id });
    res.json({ message: "success", payload: deletedTodo });
  } catch (e) {
    res.status(500).json({ message: "failure", error: e.message });
  }
}

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
