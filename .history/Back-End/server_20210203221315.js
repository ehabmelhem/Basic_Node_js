const express = require("express");

const app = express();

app.get("/")

const port = 3000;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
