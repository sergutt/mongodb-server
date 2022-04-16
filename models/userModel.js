const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  completed: { type: Boolean },
});

module.exports = User = mongoose.model("User", userSchema);
