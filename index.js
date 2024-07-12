require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("./conn");

app.get("/", (req, res) => {
    res.send("Homepage");
})
app.get("/user", (req, res) => {
    res.send("User Page");
})


app.listen(3000, () => {
    console.log("Listening at port 3000");
})
