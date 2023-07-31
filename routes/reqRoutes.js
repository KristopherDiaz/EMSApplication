const express = require("express");
const router = express.Router();
const Request = require("../models/requestModel");

router.route("/create").post((req, res) =>{
    const Name = req.body.Name;
    const Age  = req.body.Age;
    const Address = req.body.Address;
    const Contact = req.body.Contact;
    const newRequest = new Request({
        Name,
        Age,
        Address,
        Contact
    });

    newRequest.save();
})

module.exports = router;
