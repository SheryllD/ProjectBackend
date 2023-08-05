const router = require("express").Router();
const User = require("../models/User.model"); 

router.get("/", (req, res, next) => {   //update this route
//const response = await User.find()
  res.json("Everything is running ok");
});

module.exports = router;
