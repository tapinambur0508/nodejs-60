require("dotenv").config();

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

sgMail
  .send({
    to: "vmudrij0508@gmail.com",
    from: "vmudrij0508@gmail.com",
    subject: "Hello from Node.js",
    text: "This email has been sent from Node.js using SendGrid",
    html: "<strong>This email has been sent from Node.js using SendGrid</strong>",
  })
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
