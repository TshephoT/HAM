const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

// Register
router.post("/registerAdmin", async (req, res) => {
    try {
        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create a new Admin instance with the hashed password
        const newAdmin = new Admin({
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            lastName: req.body.lastName,
            idNumber: req.body.idNumber,
            gender: req.body.gender,
            isAdmin: req.body.isAdmin,
            password: hashedPassword
        });

        // Save the new admin to the database
        const saveAdmin = await newAdmin.save();
        res.status(201).json(saveAdmin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;