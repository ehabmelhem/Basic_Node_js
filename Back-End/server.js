const express = require("express");

const app = express();

const elments = [];

app.use(express.static("../public"));

app.get("/add-elemnt", (req, res) => {
  const { element } = req.query;
  elments.push(element);
  res.send({ Ok: "add success full" });
});

app.get("/send-all-elments", (req, res) => {
  res.send(elments);
});

app.get("/get-user-name", (req, res) => {
  res.send({ answer: "this is ehab" });
});
const port = 3000;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
// routing controller node js
