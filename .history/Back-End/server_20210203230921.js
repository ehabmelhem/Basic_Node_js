const express = require("express");

const app = express();

const elments = [];

app.use(express.static("../public"));

const port = 3000;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
// routing controller node js
