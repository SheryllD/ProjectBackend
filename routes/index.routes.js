const router = require("express").Router();
const usersRoutes = require ("./users.routes");

// get homepage
router.get("/", (req, res, next) => {
  res.json("all good");
});

router.use('/users', usersRoutes)

module.exports = router;
