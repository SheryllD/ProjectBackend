const router = require("express").Router();
const { response } = require("express");
const User = require("../models/User.model"); 
const Notes = require("../models/Notes.model"); 
const TodoItem = require("../models/ToDos.model");

/* GET ALL USERS -----------------------------------*/
router.get('/', async (req, res) => {
  const allUsers = await User.find()
  res.json(allUsers)
})

/* GET ONE USER -----------------------------------*/
router.get('/:userId', async (req, res) => {
  console.log(req.params)
  const oneUser = await User.findById(req.params.userId)
  res.json(oneUser)
})

/* CREATE THE USER -----------------------------------*/
router.post('/', async (req, res) => {
  const newUser = await User.create(req.body)
  res.status(201).json(newUser)
})

/* UPDATE USER ----------------------------------- */
router.put('/:userId', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
    new: true,
  })
  res.json(updatedUser)
})

/* DELETE THE USER ----------------------------------- */
router.delete('/:userId', async (req, res) => {
  await User.findByIdAndDelete(req.params.userId)
  res.status(202).json({ message: 'User has been successfully deleted' })
})

/* TASKS/TODOS BY USER ----------------------------------- */
router.get('/:userId/Todos', async (req, res) => {
  try {
    const toDosByUser = await Purchase.findById(req.params.userId)
      .populate('user')
      .populate('todos');
    res.json(toDosByUser);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error });
  }
});

/* NOTES BY USER ----------------------------------- */
router.get('/:userId/notes', async (req, res) => {
  try {
    const notesByUser = await notes.findById(req.params.userId)
      .populate('user')
      .populate('notes');
    res.json(notesByUser);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching the notes', error });
  }
});

module.exports = router;