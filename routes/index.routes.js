const router = require("express").Router();
const userRoutes = require ("./user.routes") 

// get signup
router.get("/signup", (req, res, next) => {
  res.json("sign-up ok");
});

//router.use("/user/routes", userRoutes)

// post signup

//validation 

//check if this email is already being used

//create new user in the database

//check if user exist

//check if password is correct

// sign the jwt + add algorithm

//send token to the front 

//incorrect password should get code 401

// if no user, also error 401

// //if problem with the server then error 500

// Get Rout to verify the token 

module.exports = router;
