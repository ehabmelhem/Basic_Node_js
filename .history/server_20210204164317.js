// mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/test
const express = require("express");

const app = express();

const elments = [];

app.use(express.static("public"));
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://tal3:lqPlF8vfOm7Vd2Qt@tal-test1.m39if.mongodb.net/tsofn48",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
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
