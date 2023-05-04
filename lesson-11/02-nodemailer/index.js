require("dotenv").config();

const nodemailer = require("nodemailer");

const { MAILTRAP_USER, MAILTRAP_PASS } = process.env;

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: MAILTRAP_USER,
    pass: MAILTRAP_PASS,
  },
});

transport
  .sendMail({
    to: "vmudrij0508@gmail.com",
    from: "vmudrij0508@gmail.com",
    subject: "Hello from Node.js",
    text: "This email has been sent from Node.js using Nodemailer",
    html: "<strong>This email has been sent from Node.js using Nodemailer</strong>",
  })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
