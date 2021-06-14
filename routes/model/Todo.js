const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  Date: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Todo", todoSchema);
