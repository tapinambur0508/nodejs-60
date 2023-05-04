const nodemailer = require("nodemailer");

function sendEmail(email) {
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  return transport.sendMail({ ...email, from: "vmudrij0508@gmail.com" });
}

module.exports = { sendEmail };
