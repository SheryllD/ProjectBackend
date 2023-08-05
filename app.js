// ℹ️ Gets access to environment variables/settings https://www.npmjs.com/package/dotenv
require("dotenv").config();
// ℹ️ Connects to the database
require("./db");
// Handles http requests (express is node js framework) https://www.npmjs.com/package/express
const express = require("express");
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

//middleware
app.use((req, res) => {
    console.log(req.path, req.method)
    next()
}); 

// All the routes are in here 
app.get('/', (req, res) => {
    res.json({mssg: "welcome to the app"})
  });

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

/*
const authRoutes = require('./routes/auth.routes');
app.use("auth", authRoutes);

const userRoutes = require("./routes/user.routes"); 
app.use("user", userRoutes); 
// 
*/

// To handle errors. Routes that don't exist or errors 
require("./error-handling")(app);

module.exports = app;
