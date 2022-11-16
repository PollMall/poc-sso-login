var express = require('express');
var cors  = require("cors");
var cookieParser = require('cookie-parser');
require('dotenv').config();

var indexRouter = require('./routes/index');

var app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})