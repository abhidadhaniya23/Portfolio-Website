require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const blogs = require("./routes/blog");
const fs = require("fs");

// set port number or
const port = process.env.PORT || 3000;

// set view engine
app.set("view engine", "ejs");

// middleware
app.use(express.static("public"));
app.use(express.static("public/projects"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", blogs);

// mail-sender
const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});

app.get("/", async (req, res) => {
    await axios
        .get("https://dev.to/api/articles?username=abhidadhaniya23")
        .then((response) => {
            //   console.log(response.data);
            res.render("index.ejs", {
                articles: response.data,
            });
        })
        .catch((err) => {
            console.log(err);
            // res.render('error page');
        });
});

app.post("/", (req, res) => {
    // console.log(`Name : ${req.body.name} <br> Email : ${req.body.email} <br> Message : ${req.body.message}`);
    const mailOptions = {
        from: `${req.body.email}`,
        to: "abhidadhaniya23@gmail.com",
        subject: `Email by ${req.body.name}`,
        html: `Name : ${req.body.name} <br> Email : ${req.body.email} <br> Message : ${req.body.message}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            // console.log('Email sent: ' + info.response);
            res.render("thankyou.ejs", { name: req.body.name });
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
