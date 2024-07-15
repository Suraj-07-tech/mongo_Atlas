const mongoose = require("mongoose");

(() => {
    const userSchema = new mongoose.Schema({
        name: {
            type: String
        },
        roll: {
            type: Number
        }
    });

    const userModel = new mongoose.model("userModel", userSchema);
    module.exports = userModel;
})();