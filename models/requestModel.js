const mongoose = require("mongoose");

const RequestSchema = {
    Address: String,
    Contact: String
}

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;