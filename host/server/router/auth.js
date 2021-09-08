const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const jwt= require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const Authenticate =require("../middleware/Authenticate");
require('../database/conn.js');
const User = require('../model/userSchema');
var app=express();
app.use(cookieParser());

router.get('/', (req, resp) => {
    resp.send("hello from registration");
});
router.post('/register', async (req, resp) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return resp.status(422).json({ error: "please fill all the fields" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return resp.status(422).json({ error: "Email already exist" });
        }
        else if (password != cpassword) {
            return resp.status(422).json({ error: "password is not same" });
        }
        const user = new User({ name, email, phone, work, password, cpassword });
        await user.save();

        resp.status(201).json({ message: "User registered successfully.." });
    }
    catch (err) {
        console.log(err);
    }
});

router.post('/signin', async (req, resp) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return resp.status(422).json({ message: "please fill all the field" });
    }
    try {

        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token= await userLogin.generateAuthToken();
            resp.cookie("jwtoken",token);
            if (isMatch) {
                resp.status(201).json({ message: "Welcome User" });
            }
            else {
                resp.status(400).json({ message: "invalid credentials" });
            }
        }
        else {
            resp.status(400).json({ message: "invalid credentials" });
        }
    }
    catch (err) {
        console.log(err);
    }
});
router.get("/about",Authenticate, (req, resp) => {
    resp.send(req.rootUser);
});
router.get("/getData",Authenticate, (req, resp) => {
    resp.send(req.rootUser);
});
router.get("/logout", (req, resp) => {
    resp.clearCookie('jwtoken');   
    resp.status(201).send("logout successful");
});
module.exports = router;