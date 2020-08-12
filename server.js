const express = require("express");
const sgMail = require("@sendgrid/mail");
const htmlRoutes = require("./routes/htmlRoutes");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", htmlRoutes);

app.post("/email", function (req, res) {
  let user = req.body.userName;
  let userEmail = req.body.userEmail;
  let message = req.body.userEmailMessage;
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs

  const msg = {
    to: "sutliff.jason@gmail.com",
    from: userEmail,
    subject: "![URGENT]CLIENT EMAIL FROM GOLDEN STATE WEB SERVICES",
    text: `FROM: ${user}
    
    ${message}`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Message sent");
    })
    .catch((error) => {
      console.log(error.response.body);
      // console.log(error.response.body.errors[0].message)
    });
  res.redirect("/");
});

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
