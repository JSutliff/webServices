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

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});



module.exports = router;