const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        secondName: { type: String, required: true },
        lastName: { type: String, required: true },
        idNumber: { type: Number, required: true, unique: true },
        gender: { type: String, required: true},
        nationality: { type: String, required: true  },
        race: { type: String, required: true },
        countryOfBirth: { type: String, required: true },
        placeOfBirth: { type: String, required: true },
        maritalStatus: { type: String, required: true },
        iDDateIssued: { type: Number, required: true },
        fingerprints: { type: Boolean, default: true },
        idDeceased: { type: Boolean, default: false }
    }
);

module.exports = mongoose.model("User", UserSchema);