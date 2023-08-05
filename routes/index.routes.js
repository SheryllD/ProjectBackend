const router = require("express").Router();
const userRoutes = require ("./user.routes") 

// get homepage
router.get("/", (req, res, next) => {
  res.json("all good");
});


module.exports = router;
