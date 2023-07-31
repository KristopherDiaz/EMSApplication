const mongoose = require("mongoose");

const RequestSchema = {
    Name: String,
    Age: String,
    Address: String,
    Contact: String,
}

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;