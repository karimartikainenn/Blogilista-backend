const express = require("express");
const app = express();
const loginRouter = require("./controllers/login");
const usersRouter = require("./controllers/users");
const blogsRouter = require("./controllers/blogs");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const mongoUrl = process.env.MONGO_URI;
mongoose.connect(mongoUrl);
app.use(cors());
app.use(express.json());
app.use("/api/login", loginRouter);
app.use("/api/users", usersRouter);
app.use("/api/blogs", blogsRouter);

module.exports = app;
