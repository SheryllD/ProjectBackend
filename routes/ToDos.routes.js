const router = require("express").Router();
const TodoItem = require("../models/ToDos.model"); 

router.get("/", (req, res, next) => {   //update this route
  res.json("To Do is running ok");
});

//GET to get on TodoItem

//TO create one TodoItem

//PUT to update one TodoItem

//DELETE to delete one TodoItem
module.exports = router;
