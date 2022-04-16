const router = require("express").Router();
const { findByIdAndDelete } = require("../models/todoModel");
const Todo = require("../models/todoModel");
const User = require('../models/userModel')

// get all the todos from mongodb using mongoose
router.get("/", async (req, res) => {
  try {
    const myTodos = await Todo.find({});
    res.send(myTodos);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo({ text: req.body.text, completed: false });
    res.json(await newTodo.save());
  } catch (err) {
    res.json({ msg: err });
  }
});

// will update a Todos text with mongoose. findByIdAndUpdate
router.put("/updatetext", async (req, res) => {
  try {
    const updateResponse =await Todo.findByIdAndUpdate(req.body.id, {
      text: req.body.text,
    });
    if(updateResponse!== null) return res.send("success");
    res.json('wrong id sent')
  } catch (err) {
    res.json({ msg: err });
  }
});

// will update a Todos completed status in mongoose. findByIdAndUpdate
router.put("/updatecompleted", async (req, res) => {
  try {
    const updateResponse = await Todo.findByIdAndUpdate(req.body.id, {
      completed: req.body.completed,
    });
    if(updateResponse!==null) return res.json({ msg: "success" });
    res.json({msg: 'wrong id sent'})
  } catch (err) {
    res.json({ msg: err });
  }
});

// will delete a todo. findByIdAndDelete
router.put("/delete", async (req, res) => {
  try {
    
   const deleteResponse =  await Todo.findByIdAndDelete(req.body.id);
   console.log(deleteResponse)
   if(deleteResponse!== null) return res.json({ msg: "success" });
   res.json({msg:"wrong id sent"})
  } catch (err) {
    res.json({ msg: err });
  }
});

// this is where our user routes will begin
router.get('/users', async(req, res)=>{
  try{
    const allUsers = await User.find({})
    res.json(allUsers)
  }catch (err){
    res.json({msg:err})
  }
})

module.exports = router;
