// mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/test
const express = require("express");

const app = express();

const elments = [];

app.use(express.static("public"));
const mongoose = require("mongoose");
mongoose.connect(
  " mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/firstdb",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});
const first = new mongoose.Schema({
  name: String,
  imgSrc: String,
  age: Number,
});

const Kitten = mongoose.model("kittyschema", Kittyschema);
app.get("/add-elment", (req, res) => {
  const { id, text } = req.query;
  elments.push({ id: id, text: text });
  res.send({ elments });
});
app.get("/get-elemnts", (req, res) => {
  res.send({ elments });
});
app.get("/delete", (req, res) => {
  const { id } = req.query;
  console.log(id);
  for (let i = 0; i <= id; i++) {
    elments.splice(i, 1);
  }
  res.send({ messege: "delete has been success full" });
});

const port = 3000;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
// routing controller node js
