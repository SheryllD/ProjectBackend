const router = require("express").Router();
const usersRoutes = require("./users.routes");
const todosRoutes = require("./ToDos.routes"); 

// get homepage
router.get("/", (req, res, next) => {
  res.json("all good");
});

router.use('/users', usersRoutes)
router.use('/todos', todosRoutes)

module.exports = router;
