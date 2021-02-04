const express = require("express");
app = express();
// uZjj2yPhI2ivRSPy
//
// mongodb+srv://ehab:<password>@cluster0.jnzgj.mongodb.net/test
var bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ehab:<password>@cluster0.jnzgj.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const Cat = mongoose.model("Cat", { name: String, souls: Number }); //schema

const kitty = new Cat({ name: "Kitti", souls: 9 }); //instance

kitty.save().then(() => console.log("kitti was saved to DB")); //save

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
//  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/test"
//read
