const User = require("../models/User")
const mailSender = require("../utils/mailSender")
const bcrypt = require("bcrypt")
const crypto = require("crypto")

//1st process and function resetPasswordToken = when user clicks on reset password, 
//validate email, generate token, create url, send email

//2nd process and function resetPassword = after sending the mail, functionalities of the reset password page which
//opens after the user has clicked on the link of reset password in the mail


exports.resetPasswordToken = async (req, res) => {
  try {
    //fetch email
    const email = req.body.email;
    //check if the email already is registered or not
    const user = await User.findOne({ email: email })
    if (!user) {
      return res.json({
        success: false,
        message: `This Email: ${email} is not Registered With Us Enter a Valid Email `,
      })
    }
    //genereate token
    const token = crypto.randomBytes(20).toString("hex")

    //update user by adding token and expiration time
    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 3600000,
      },
      { new: true } //updated document is returned in the response
    )
    console.log("DETAILS", updatedDetails)

    //create url which will be sent in the email to the user who wishes to the change the password 
    const url = `http://localhost:3000/update-password/${token}`
    // const url = `https://studynotion-edtech-project.vercel.app/update-password/${token}`

    //send mail containing the url to be clicked
    await mailSender( //utils->mailsender function
      email,
      "Password Reset",
      `Your Link for email verification is ${url}. Please click this url to reset your password.`
    )

    res.json({
      success: true,
      message:
        "Email Sent Successfully, Please Check Your Email to Continue Further",
    })
  } catch (error) {
    return res.json({
      error: error.message,
      success: false,
      message: `Some Error in Sending the Reset Message`,
    })
  }
}

exports.resetPassword = async (req, res) => {
  try {
    //data fetch
    const { password, confirmPassword, token } = req.body

    //validation 
    if (confirmPassword !== password) {
      return res.json({
        success: false,
        message: "Password and Confirm Password Does not Match",
      })
    }

    //get user details from the database using token
    const userDetails = await User.findOne({ token: token })
    //if no entry is found, that means invalid token
    if (!userDetails) {
      return res.json({
        success: false,
        message: "Token is Invalid",
      })
    }

    //if the resetPasswordExpires time which we have set while sending the email, is greater that
    //the current time, that means the timer has expired
    if (!(userDetails.resetPasswordExpires > Date.now())) {
      return res.status(403).json({
        success: false,
        message: `Token is Expired, Please Regenerate Your Token`,
      })
    }

    // now hash the new password and store it in the user db
    const encryptedPassword = await bcrypt.hash(password, 10)
    await User.findOneAndUpdate(
      { token: token },
      { password: encryptedPassword },
      { new: true }
    )
    res.json({
      success: true,
      message: `Password Reset Successful`,
    })
  } catch (error) {
    return res.json({
      error: error.message,
      success: false,
      message: `Some Error in Updating the Password`,
    })
  }
}
