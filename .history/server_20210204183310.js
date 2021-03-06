const express = require("express");
const body_parser = require("body-parser");

const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/tododb",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

const list = new mongoose.Schema({
  counter: Number,
  text: String,
});

const model = mongoose.model("list", list);

app.get("/add-elment", (req, res) => {
  const { counter, text } = req.query;
  var add = new model({ counter: counter, text: text });
  add.save().then(() => {
    console.log("add has been succes full");
  });
  res.send({ counter, text });
});

app.get("/get-all")

app.use(express.static("public"));

const port = 3002;

app.listen(port, () => {
  console.log("listen on port ", port);
});
