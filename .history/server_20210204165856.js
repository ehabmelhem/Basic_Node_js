// BlJoP6LRCELmm0PR
// mongodb+srv://ehabmelhem11:BlJoP6LRCELmm0PR@cluster0.ojjnq.mongodb.net/test

const express = require("express");
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

// const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb+srv://ehabmelhem11:BlJoP6LRCELmm0PR@cluster0.ojjnq.mongodb.net/firstdb",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("we are connected to DB");
// });

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
//  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/test"
//read
