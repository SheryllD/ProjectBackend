require("dotenv").config(); 
require("./db");
const express = require("express");
const app = express();
require("./config")(app);

//middleware
//app.use((req, res) => {
//    console.log(req.path, req.method)
//    next()
//}); 

// All the routes are in here 
//app.get('/', (req, res) => {
//    res.json({mssg: "welcome to the app"})
//  });

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes); 

//const authRoutes = require("./routes/auth.routes"); 
//app.use("/auth", authRoutes); 

//const dashboardRoutes = require("./routes/dashboard.routes"); 
//app.use("/dashboard", dashboardRoutes); 

const usersRoutes = require("./routes/users.routes"); 
app.use("users", usersRoutes); 

const todosRoutes = require("./routes/todos.routes"); 
app.use("todos", todosRoutes); 

// To handle errors. Routes that don't exist or errors 
require("./error-handling")(app);

module.exports = app;
