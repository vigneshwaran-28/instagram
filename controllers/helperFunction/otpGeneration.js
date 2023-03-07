const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const pool = require("../../models/db");

let email, otp;

function getOtp(req, res) {
  let { mail } = req.body;
  email = mail;
  otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "instagramig130@gmail.com",
      pass: "vyyssnluwtgfumzx",
    },
  });

  let mailDetails = {
    from: "instagramig130@gmail.com",
    to: email,
    subject: "Test mail",
    text: "Node.js testing mail for GeeksforGeeks and the otp : " + otp,
  };

  mailTransporter.sendMail(mailDetails, async function (err, data) {
    if (err) {
      res.status(400).json({ message: "Error occured in sending mail" });
    } else {
      res.status(200).json({ message: "Email sent successfully" });
      try {
        await pool.query("insert into otp values($1,$2)", [email, otp]);
      } catch (error) {
        console.log("error occured in inserting values!", error);
      }
    }
  });
}
module.exports = getOtp;
