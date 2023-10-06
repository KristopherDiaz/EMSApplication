const mongoose = require("mongoose");

const RegisterSchema = {
    Registration: String,

}

const Register = mongoose.model("Registers", RegisterSchema);

module.exports = Register;