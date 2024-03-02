const express = require('express');
const app = express()

const blogsRouter = require("./controllers/blogs");
const Blog = require('./models/blog');
const cors = require('cors');
const config = require('./utils/config');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
require('dotenv').config();


const mongoUrl = process.env.MONGO_URI;
mongoose.connect(mongoUrl);

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogsRouter);

module.exports = app;