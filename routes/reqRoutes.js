const express = require("express");
const router = express.Router();
const Request = require("../models/requestModel");

router.route("/create").post((req) =>{
    const Address = req.body.Address;
    const Contact = req.body.Contact;
    const newRequest = new Request({
        Address,
        Contact
    });

    newRequest.save();
})

module.exports = router;
