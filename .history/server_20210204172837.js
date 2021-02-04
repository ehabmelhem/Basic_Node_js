const express = require("express");
const app = express();
// uZjj2yPhI2ivRSPy
//
// mongodb+srv://ehab:<password>@cluster0.jnzgj.mongodb.net/test
var bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ehab:uZjj2yPhI2ivRSPy@cluster0.jnzgj.mongodb.net/mydb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
//  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/test"
//read
