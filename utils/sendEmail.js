const nodeMailer = require("nodemailer");

const sendEmail = async(options) =>{

    const transporter = nodeMailer.createTransport({
        host:process.env.SMTPHOST,
        port:process.env.SMTPPORT,
        service:process.env.SMTPSERVICE,
        auth:{
            user:process.env.SMTPMAIL,
            pass:process.env.SMTPPASSWORD
        },
    });

    const mailOptions = {
        from:process.env.SMTPMAIL,
        to:options.email,
        subject:options.subject,
        text:options.message,
    };

    await transporter.sendMail(mailOptions);


};

module.exports = sendEmail;