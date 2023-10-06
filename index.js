const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Group5:EMS4ACP2@emscluster.hjpqmif.mongodb.net/EMSDB")

app.use("/", require("./routes/reqRoutes"));
app.use("/", require("./routes/regRoutes"));


app.listen(3001, function(){
    console.log("express server is running on port 3001")
})