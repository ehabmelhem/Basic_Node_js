const express = require("express");

const app = express();

const elments = [];

app.use(express.static("../public"));

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
  for(int i=0;i<elments.length;)
  res.send({ elments });
});

const port = 3000;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
// routing controller node js
