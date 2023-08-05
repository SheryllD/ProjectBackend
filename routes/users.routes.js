const router = require("express").Router();
const { response } = require("express");
const User = require("../models/User.model"); 

router.get("/", async (req, res, next) => {   //update this route
const response = await User.find()
  res.json("Everything is running ok");
});

// get to get a user 
router.get('/:userId', async (req, res) => {
  console.log(req.params)
  const response = await User.findById(req.params.userId)

  res.json(response)
})

//post to create a user 
router.post('/', async (req, res) => {
  const oneUser = await User.create(req.body)
  res.json(201).json(oneUser)
})

//put to update a user 
router.put('/:userId', async (req, res) => {
  const {userId} = req.params;

const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true })
res.json(response)
})

//DELETE to delete one user
router.delete('/:userId', async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.userId)

res.status(202).json({message: "User successfully deleted"})
})
module.exports = router;
