const express = require('express');
// const bcrypt = require('bcrypt');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, () => {
    console.log("Connected to MongoDB");
});

app.listen(3001, () => {
  console.log("Backend server is running!");
});