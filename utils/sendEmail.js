const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    port: 465,
    host:'smtp.gmail.com',
    service: 'gmail',
    secure:true,
    
    auth: {
      user: 'mymailforabhi@gmail.com',
      pass: 'passwordForAbhi',
    },
  });

  const mailOptions = {
    from: 'mymailforabhi@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
