const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 5051;
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// make my mongodb connection WITH mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/todo-with-db",
  (err) => {
    if (err) throw new Error({ msg: err });
    console.log("connected to mongodb");
  }
);

app.use("/api", require("./routes/todo-api-routes"));
app.use("/api", require("./routes/user-api-routes"));

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
