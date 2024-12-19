const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
}, { timestamps: true });

const User = mongoose.model("Userop", userSchema);

module.exports = User; // Export the User model
