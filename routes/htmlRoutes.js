const path = require("path");
// require("dotenv").config();
var router = require("express").Router();

// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// router.post("/email", (req, res) => {
//   // console.log("data: ", req.body);

//   res.json({ message: "Message received!!" });
//   const msg = {
//     to: "dave@davidprimm.com",
//     from: req.body.userEmail,
//     subject: req.body.userEmailSubject,
//     text: req.body.userEmailMessage
//   };
//   try {
//     sgMail.send(msg);
//     console.log("Success");
//   } catch (error) {
//     console.log(error);
//   }
// });

router.get("/domain-with-ssl", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/domain-with-ssl.html"));
});

router.get("/web-design", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/website-design.html"));
});

router.get("/business-website-solutions", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/websites.html"));
});

router.get("/local-seo", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/local-seo.html"));
});

router.get("/sitemap", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/sitemap.xml"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
