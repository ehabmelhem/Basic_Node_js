const express = require("express");

const app = express();

const elments = [];

app.use(express.static("../public"));

app.get("/add-elment",(req,res)=>{
    
})

const port = 3000;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
// routing controller node js
