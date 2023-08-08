const router = require("express").Router();
const TodoItem = require("../models/ToDos.model"); 
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
module.exports = router;

