require("dotenv").config(); 
require("./db");
const express = require("express");
const app = express();
require("./config")(app);


const authRoutes = require("./routes/auth.routes"); 
app.use("/auth", authRoutes); 

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes); 

//const dashboardRoutes = require("./routes/dashboard.routes"); 
//app.use("/dashboard", dashboardRoutes); 

const usersRoutes = require("./routes/users.routes"); 
app.use("/api/users", usersRoutes); 

//const todosRoutes = require("./routes/ToDos.routes"); 
//app.use("/api/todos", todosRoutes); 

// To handle errors. Routes that don't exist or errors 
require("./error-handling")(app);

module.exports = app;
