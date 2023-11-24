const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.TRANSPORT_HOST,
  port: process.env.TRANSPORT_PORT,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.TRANSPORT_AUTH_USER,
    pass: process.env.TRANSPORT_AUTH_USER_PASSWORD,
  },
});

module.exports = transporter;
