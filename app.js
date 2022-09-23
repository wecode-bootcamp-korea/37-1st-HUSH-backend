require("dotenv").config();
    
const http    = require("http");
const express = require('express');
const cors    = require('cors');
const app     = express();
const morgan  = require('morgan');
const routers = require("./routers");
const{ globalErrorHandler } = require('./utils/error')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routers);

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.use(globalErrorHandler)

const server = http.createServer(app);
const PORT = process.env.PORT;

<<<<<<< HEAD
app.get('/ping', function (req, res, next) {
  res.status(200).json({message : 'pong'});
    
})
=======
const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};
>>>>>>> main

start();