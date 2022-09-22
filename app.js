require("dotenv").config();
    
const http    = require("http");
const express = require('express');
const cors    = require('cors');
const app     = express();
const morgan  = require('morgan');
const routes = require("./routes");
const{ globalErrorHandler } = require('./utils/error')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.use(globalErrorHandler)

const server = http.createServer(app);
const PORT = process.env.PORT;

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};

start();