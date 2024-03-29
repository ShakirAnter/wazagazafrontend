const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Contact Form Functionality
const sendMessage = (req, res) => {
  const { name, email, msg } = req.body;
  const userPass = process.env.NODEMAILER_EMAIL_PASS;

  const Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shakiranter@gmail.com",
      pass: userPass,
    },
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
  });

  const mailOptions = {
    from: email,
    to: "shakiranter@gmail.com",
    subject: "Waza Gaza Contact Form",
    text: msg,
    html: `
        <html>
        <body style="font-family: 'Arial', sans-serif; background-color: gray; color: #333;">
          <h1 style="color: #007bff;">New Contact Form From Waza Gaza</h1>
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 10px;font-size: 18px;"><strong>Name:</strong> ${name}</li>
            <li style="margin-bottom: 10px;font-size: 18px;"><strong>Email:</strong> ${email}</li>
            <li style="margin-bottom: 10px;font-size: 18px;"><strong>Message:</strong> ${msg}</li>
          </ul>
        </body>
      </html>
        `,
  };

  Transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      console.log("Error sending email: ", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent successfully");
      res.status(200).send("Email sent successfully");
    }
  });
};



module.exports = {
  sendMessage,
};
