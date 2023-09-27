const mongoose = require("mongoose");

const RegisterSchema = {
    Registration: String,

}

const Register = mongoose.model("Register", RegisterSchema);

module.exports = Register;