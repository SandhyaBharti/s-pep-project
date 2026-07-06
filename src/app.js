const express = require("express");

const app = express();

// route 
const authRoutes = require("./routes/auth.routes.js");

app.use("/auth", authRoutes);
module.exports = app;   
