require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios");
const nodemailer = require("nodemailer");
const blogs = require("./routes/blog");

// set port number or
const port = process.env.PORT || 3000;

// set view engine
app.set("view engine", "ejs");

// middleware
//response as Json
app.use(express.json());

//Parse x-www-form-urlencoded request into req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("public/projects"));
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

app.post("/contact", (req, res) => {
    // console.log(`Name : ${req.body.name} <br> Email : ${req.body.email} <br> Message : ${req.body.message}`);
    const mailOptions = {
        from: `${req.body.email}`,
        to: "abhidadhaniya23@gmail.com",
        subject: `Email by ${req.body.name}`,
        html: `Name : ${req.body.name} <br> Email : ${req.body.email} <br> Subject : ${req.body.subject} <br> Message : ${req.body.msg}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            // console.log('Email sent: ' + info.response);
            res.status(200).json({ name: req.body.name, email: req.body.email, subject: req.body.subject, msg: req.body.msg });
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
