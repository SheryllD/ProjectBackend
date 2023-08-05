const router = require("express").Router();
const TodoItem = require("../models/ToDos.model"); 

router.get("/", async (req, res, next) => {  
    const response = await TodoItem.find() 
  res.json("To Do is running ok");
});

//GET to get on TodoItem
router.get('/', async (req, res) => {
    const response = await TodoItem.findById()
})
//TO create one TodoItem

//PUT to update one TodoItem

//DELETE to delete one TodoItem
module.exports = router;
