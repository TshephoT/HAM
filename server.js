const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cors = require("cors");

// Routes
const adminAuthRoute = require("./routes/adminAuth");
const userRoute = require("./routes/User");

// env config
dotenv.config();

// mongodb config
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successful..."))
    .catch((err) => { console.log(err) });

app.use(cors());
app.use(express.json());
app.use("/api", adminAuthRoute);
app.use("/api", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server successfully running on port ${process.env.PORT}...!`);
});