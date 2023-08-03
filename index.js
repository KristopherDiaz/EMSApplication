const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://kris:emsapp1234@cluster0.pbl7rn8.mongodb.net/EMSDB")

app.use("/", require("./routes/reqRoutes"));

app.listen(3001, function(){
    console.log("express server is running on port 5000")
})
