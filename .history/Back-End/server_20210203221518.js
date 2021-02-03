const express = require("express");

const app = express();

app.get("/")

app.get("/", (req, res) => {
  res.send("npm i -g nodemon");
});

const port = 3000;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
