const router = require("express").Router();
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const Todos = require("../models/ToDos.model");

router.get("/", async (req, res) => {
  try {
    const todos = await Todos.find();
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:todoId", async (req, res) => {
  console.log(req.params);
  const oneTodo = await Todos.findById(req.params.todoId);
  res.json(oneTodo);
});

router.post("/new", isAuthenticated, async (req, res) => {
  try {
    console.log(req.body, req.payload);
    const newToDo = await Todos.create({
      user: req.payload.userId,
      text: req.body.text,
    });
    console.log("here is your todo", newToDo);
    res.status(201).json(newToDo);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:todoId", async (req, res) => {
  try {
    await Todos.findByIdAndDelete(req.params.todoId);
    res.status(202).json({ message: "todo has been deleted" });
    console.log("all good");
  } catch (err) {
    console.log(err);
  }
});

// complete the todo
router.get("/:TodoId", async (req, res) => {
  const Todos = await Todos.findById(req.params.todoId);
  Todos.complete = !Todos.complete;
  Todos.save();
  res.json(Todos);
});

router.post("/edit/:TodoId", async (req, res) => {
  try {
    const payload = req.body;
    const updatedTodos = await Todos.findByIdAndUpdate(
      req.params.TodoId,
      {
        text: req.body.updateTodo,
      },
      { new: true }
    );
    console.log("updatedTodos", updatedTodos);

    const newToDo = await Todos.find({ user: updatedTodos.user });
    console.log("ok?", newToDo);
    res.status(200).json({ AlltoDos: newToDo });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
