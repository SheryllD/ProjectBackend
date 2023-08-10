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

  //const Todo = new Todo({
  //	text: req.body.text
  // })

  // Todo.save();
  // res.json(Todo);
});

router.delete("/delete/:todoId", async (req, res) => {
  try {
    await Todos.findByIdAndDelete(req.params.todoId);
    res.status(202).json({ message: "todo has been deleted" });
    console.log("all good");
  } catch (err) {
    console.log(err);
  }
  //const result = await Todos.findByIdAndDelete(req.params.id);
  //res.json({result});
});

// complete the todo
router.get("/:TodoId", async (req, res) => {
  const Todos = await Todos.findById(req.params.todoId);
  Todos.complete = !Todos.complete;
  Todos.save();
  res.json(Todos);
});

// //DELETE to delete one TodoItem
// router.delete('/:TodosId', async (req, res) => {
//     await Todos.findByIdAndDelete(req.params.todosId)
//     res.status(202).json({ message: 'Task deleted'})
// })

//PUT to update one TodoItem

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

//import axios from "axios"; //imported this 1:51
/*
router.get("/", async (req, res, next) => {  

    const response = await TodoItem.find() 
  res.json("To Do is running ok");
});

//GET to get on TodoItem
router.get('/:ToDoItemId', async (req, res) => {
    const response = await ToDoItem.findById()
})
//POST to create one TodoItem/task
router.post('/', async (req, res) => {
    const oneToDoItem = await ToDoItem.create(req.body)
    res.status(201).json(oneToDoItem)
})
 //PUT to update one TodoItem
router.put('/:ToDoItemId', async (req, res) => {
    const updatedToDoItem = await TodoItem.findByIdAndUpdate(req.params.ToDoItemId, req.body, {
        new: true,
    })
    res.json(updatedCharacter)
})

//DELETE to delete one TodoItem
router.delete('/:ToDoItemId', async (req, res) => {
    await TodoItem.findByIdAndDelete(req.params.ToDoItemId)
    res.status(202).json({ message: 'Task deleted'})
})
*/
