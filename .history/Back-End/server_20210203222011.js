const express = require("express");

const app = express();

app.use(express.static("../public"));

app.get("/get-user")
const port = 3000;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
