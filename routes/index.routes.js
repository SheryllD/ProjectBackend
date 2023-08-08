const router = require("express").Router();
//const usersRoutes = require("./users.routes");
const todosRoutes = require("./ToDos.routes"); 
const authRoutes = require("./auth.routes")

// get homepage
router.get("/", (req, res, next) => {
  res.json("all good");
});

//router.use('/users', usersRoutes)
router.use('/todos', todosRoutes)
router.use('/auth', authRoutes)
//router.use('/dashboard', dashboardRoutes)

module.exports = router;
