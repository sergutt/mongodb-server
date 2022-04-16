const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
});

module.exports = Todo = mongoose.model("Todo", todoSchema);
