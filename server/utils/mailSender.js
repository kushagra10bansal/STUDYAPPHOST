const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {

    let transporter = nodemailer.createTransport({ //.createTransport is used to create a tranporter object  which is responsible for sending emails
      host: process.env.MAIL_HOST, //smtp server host
      auth: {
        user: process.env.MAIL_USER, //smtp server email id
        pass: process.env.MAIL_PASS, //smtp server app password (using gmail after 2step auth)
      },
      secure: false,
    })

    let info = await transporter.sendMail({ //sendMail function sends the email
      from: `"Studynotion | CodeHelp" <${process.env.MAIL_USER}>`, // sender address
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    })
    console.log(info.response)
    return info
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports = mailSender
