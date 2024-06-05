const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        secondName: { type: String, required: true },
        lastName: { type: String, required: true },
        idNumber: { type: Number, required: true, unique: true },
        gender: { type: String, required: true},
        isAdmin: { type: Boolean, default: false  },
        password: { type: String, required: true }
    },

    {timestamps: true}
);

module.exports = mongoose.model("Admin", AdminSchema);

