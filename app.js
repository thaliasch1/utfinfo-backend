const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const cors = require('cors');

app.use(cors());
app.use(fileupload());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Acess-Control-Allow-Origin', "*");
  res.header('Acess-Control-Allow-Headers', "*");

  if (req.method === "OPTIONS") {
    res.header('Acess-Control-Allow-Methods', 'POST, GET, DELETE');
    return res.status(200).json({});
  }
  next();
})

const slidesRoute = require('./api/routes/slides');

app.use('/slides', slidesRoute);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
})
module.exports = app;