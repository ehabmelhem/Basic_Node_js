const express = require("express");

const app = express();

const elments = [];

app.use(express.static("../public"));

app.get("/add-el")

app.get("/get-user-name", (req, res) => {
  res.send({ answer: "this is ehab" });
});
const port = 3000;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
