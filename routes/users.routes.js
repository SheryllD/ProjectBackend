const router = require("express").Router();
const User = require("../models/User.model"); 

router.get("/", (req, res, next) => {   //update this route
//const response = await User.find()
  res.json("Everything is running ok");
});

// get to get a user 

//post to create a user 

//put to update a user 

//delete 
module.exports = router;
