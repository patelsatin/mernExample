const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const app = express();
dotenv.config({ path: './config.env' });
const port=process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json());
require('./database/conn.js');
app.use(require('./router/auth.js'));

// app.get("/about",authenticate, (req, resp) => {
//     resp.send("Hello I am about page");
// });
app.get("/contact", (req, resp) => {
    resp.send("Hello I am contact page");
});
app.get("/signin", (req, resp) => {
    resp.send("Hello I am login page");
});
app.get("/signup", (req, resp) => {
    resp.send("Hello I am registration page");
});

// if(process.env.NODE_ENV == "production"){
//     app.use(express.static("client/build"));
// }
app.listen(port, () => {
    console.log('server start..');
});