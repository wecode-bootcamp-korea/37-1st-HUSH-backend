require("dotenv").config();
    
const http    = require("http");
const express = require('express');
const cors    = require('cors');
const app     = express();
const morgan  = require('morgan');
const routers = require("./routers");
const{ globalErrorHandler } = require('./utils/error')

const PORT = process.env.PORT;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routers);

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.use(globalErrorHandler)

app.listen(PORT, () => {
  console.log(`Listening to request on 127.0.0.1:${PORT}`);
});
