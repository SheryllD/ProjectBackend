const router = require('express').Router();
const bcrypt = require ('bcryptjs'); 
const jwt = require ("jsonwebtoken"); 
const User = require('../models/User.model'); 
const { isAuthenticated } = require('../middlewares/jwt.middleware');

/*--------- routes to register the potential user -------- */
// auth route checking
router.get('/registerpage', (req, res, next) => {
  res.json('working')
})

//post data to register the user 
router.post('/registerpage', async (req, res) => {
  console.log(req.body)
  const payload = req.body 
  
  const salt = bqrypt.genSaltsync(13)
  const passwordHash = bqrypt.hashSync(payload.password, salt)

  try{
    await User.create({
      username: payload.username, 
      email: payload.email, 
      password: password
    })
    res.status(201).json({ message: 'User created'})
  } catch (error) {
    consol.log(error)
    res.status(500),json(error)
  }
})

/* ---------------POST route to login the user --------------- */
router.post('/loginpage', async (req, res) => {
  const payload = req.body 
  /* User exists? Check! */
  const potentialUser = await User.findOne({ email: payload.email })
  if (potentialUser) {
    const doPasswordsMatch = bcrypt.compareSync(payload.password, potentialUser.password)
    /* Check if password is match */
    if (doPasswordsMatch) {
      /* Sign the JWT. This creates the token*/
      const authToken = jwt.sign({ userId: potentialUser._id }, process.env.TOKEN_SECRET, {
        algorithm: 'HS256',
        expiresIn: '8h',
      })
      // Send token to the front.
      res.status(202).json({ token: authToken})
    } else {
      /* Incorrect password */
      res.status(403).json({errorMessage: 'Password is invalid'})
    }
  } else {
    /* No user found */
    res.status(403).json({errorMessage: 'No user found'})

  }
})

/* GET route to verify the token */
router.get('/verify', isAuthenticated, async(req, res) => {
  console.log('MW', req.payload)
  const currentUser = await User.findById(req.payload.userId)
  currentUser.password = '****'
  res.status(200).json({message: 'This token is valid', currentUser})
})

module.exports = router

/*
router.get("/signup", (req, res, next) => {
  res.json("sign-up ok");
});

//router.use("/user/routes", userRoutes)

// Add sign up user

//get user data from the sign-up form 

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
*/

