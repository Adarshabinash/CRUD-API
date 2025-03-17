const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const connection = require("./connection");

app.use(express.json()); //To handle the response since they will be in json.

const routers = require("./router");
app.use("/", routers);

app.listen(port, () => {
  console.log(`listening at the port ${port}`);
  connection();
});
