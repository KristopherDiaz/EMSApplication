const express = require("express");
const router = express.Router();
const Register = require ("../models/registerModel");

router.route("/create").post((req) =>{
    const Registration = req.body.Registration;

    const newRegister = new Register({
        Registration
    });

    newRegister.save();
})

module.exports = router;
