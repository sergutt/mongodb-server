const router = require("express").Router();
// const { findByIdAndDelete } = require("../models/todoModel");
// const Todo = require("../models/todoModel");
const User = require("../models/userModel");

// this is where our user routes will begin
router.get("/users", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.json(allUsers);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.post("/users", async (req, res) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      completed: false,
    });
    res.json(await newUser.save());
  } catch (err) {
    res.json({ msg: err });
  }
});
router.put("/users/updatetext", async (req, res) => {
  try {
    const updateResponse = await User.findByIdAndUpdate(req.body.id, {
      email: req.body.email,
      userName: req.body.userName,
      password: req.body.password,
    });
    if (updateResponse !== null) return res.send("success");
    res.json("wrong id sent");
  } catch (err) {
    res.json({ msg: err });
  }
});
router.put("/users/updatecompleted", async (req, res) => {
  try {
    const updateResponse = await User.findByIdAndUpdate(req.body.id, {
      completed: req.body.complete,
    });
    if (updateResponse !== null) return res.json({ msg: "success" });
    res.json({ msg: "wrong id sent" });
  } catch (err) {
    res.json({ msg: err });
  }
});
router.put("/users/delete", async (req, res) => {
  try {
    const deleteResponse = await User.findByIdAndDelete(req.body.id, {});
    console.log(deleteResponse);
    if (deleteResponse !== null) return res.json({ msg: "success" });
    res.json({ msg: "wrong id sent" });
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
