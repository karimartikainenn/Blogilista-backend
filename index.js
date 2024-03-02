const express = require('express');
const app = express();
const config = require('./utils/config');
const logger = require('./utils/logger');
const blogsRouter = require("./controllers/blogs");
const Blog = require('./models/blog');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.MONGO_URI;
mongoose.connect(mongoUrl);

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogsRouter);

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
