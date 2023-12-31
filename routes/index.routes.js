const router = require("express").Router();
const todosRoutes = require("./ToDos.routes");
const authRoutes = require("./auth.routes");
const usersRoutes = require("./users.routes");
const notesRoutes = require("./Notes.routes");

// get homepage
router.get("/", (req, res, next) => {
  res.json("all good");
});

//router.use('/users', usersRoutes)
router.use("/todos", todosRoutes);
router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/notes", notesRoutes);
//router.use('/dashboard', dashboardRoutes)

module.exports = router;
