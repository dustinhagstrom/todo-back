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
  let { todo } = req.body;
  try {
    let newTodo = await new Todo({
      todo: todo,
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

async function updateTodoDone(req, res) {
  try {
    let updatedTodoDone = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({ payload: updatedTodoDone });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
}

async function updateTodoWords(req, res) {
  try {
    let updatedTodoWords = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ payload: updatedTodoWords });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
}

async function sortTodoByDate(req, res) {
  try {
    let sort = req.query.sort;
    let sortOrder = sort === "desc" ? -1 : 1;
    console.log(sortOrder);
    let foundTodo = await Todo.find({}).sort({ Date: sortOrder });
    res.json({ payload: foundTodo });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
}

async function sortTodoByDone(req, res) {
  try {
    let sort = req.query.sort;
    let sortOrder = sort === "done" ? -1 : 1;
    let foundTodo = await Todo.find({}).sort({ isDone: sortOrder });
    res.json({ payload: foundTodo });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
}

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  updateTodoDone,
  updateTodoWords,
  sortTodoByDate,
  sortTodoByDone,
};
