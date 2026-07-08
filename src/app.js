const express = require("express");

const app = express();

// route 
const authRoutes = require("./routes/auth.routes.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoutes);
module.exports = app;   
