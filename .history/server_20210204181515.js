const express = require("express");
const body_parser = require("body-parser");

const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/tododb",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.use(express.static("public"));

const port = 3002;

app.listen(port, () => {
  console.log("listen on port ", port);
});
