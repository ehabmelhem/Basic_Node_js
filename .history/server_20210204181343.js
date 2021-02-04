const express = require("express");
const body_parser = require("body-parser");

const app = express();

app.use(express.static("public"));

const port = 3002;

app.listen(port, () => {
  console.log("listen on port ", port);
});
