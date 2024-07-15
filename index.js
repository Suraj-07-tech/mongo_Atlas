require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./model")
const path = require("path");
const { urlencoded } = require("body-parser");
require("./conn");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const viewsPath = path.join(__dirname, "/views");

app.set("views", viewsPath);
app.set("view engine", "hbs");
app.get("/", (req, res) => {
    res.send("Homepage");
})
app.get("/user", (req, res) => {
    // res.send("User Page");
    res.render("register");
})


app.post("/user", async (req, res) => {
    const user = await new userModel({
        name: req.body.name,
        roll: req.body.roll
    })
    const data = await user.save();
    console.log("User Saved", data);
    res.redirect("/")
})


app.listen(3000, () => {
    console.log("Listening at port 3000");
})


