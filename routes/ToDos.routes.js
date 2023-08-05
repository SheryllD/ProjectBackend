const router = require("express").Router();
const TodoItem = require("../models/ToDos.model"); 

router.get("/", (req, res, next) => {   //update this route
//const response = await User.find()
  res.json("Everything is running ok");
});

//GET to get on TodoItem

//TO create one TodoItem

//PUT to update one TodoItem

//DELETE to delete one TodoItem
module.exports = router;
