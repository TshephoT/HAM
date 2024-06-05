const express = require("express");
const router = express.Router();
const User = require("../models/User");

//  Register User
router.post("/user/registerUser", async (req, res) => {
    try {
        const newUser = new User({
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            lastName: req.body.lastName,
            idNumber: req.body.idNumber,
            gender: req.body.gender,
            nationality: req.body.nationality,
            race: req.body.race,
            countryOfBirth: req.body.countryOfBirth,
            placeOfBirth: req.body.placeOfBirth,
            maritalStatus: req.body.maritalStatus,
            iDDateIssued: req.body.iDDateIssued,
            fingerprints: req.body.fingerprints,
            idDeceased: req.body.idDeceased
        });

        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

//  GET Single User
router.get("/user/findById/:idNumber", async (req, res) => {
    try {
        const userInfo = await User.findOne({idNumber: req.params.idNumber});
        if (!userInfo) {
            return res.status(404).json({ error: "User not found..." });
        }
        res.status(200).json(userInfo);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

//  Get All Users
router.get("/user/findAll", async (req,res) => {
    try {
        const allUsersInfo = await User.find();
        if (!allUsersInfo){
            res.status(404).json({ error: "No users found..." });
        }
        res.status(200).json(allUsersInfo);
    } catch (error) {
        res.status(500).json({ errorr: error.message });
    }
});

//  Update User Information
router.put("/user/update/:idNumber", async (req,res) => {
    try {
        const updateUserInfo = await User.findOneAndUpdate({ idNumber: req.params.idNumber}, {$set: req.body}, {new: true });
        res.status(201).json("Update successful...");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//  


module.exports = router;