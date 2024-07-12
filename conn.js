const mongoose = require("mongoose");

(async () => {

    try {
        await mongoose.connect(process.env.URI);
        console.log("Connection Successful");
    } catch (error) {
        console.log("Connection Failed");
    }
})();