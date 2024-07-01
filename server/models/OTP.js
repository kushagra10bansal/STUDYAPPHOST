const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");

//this model has otp has
// 1. otp template
// 2. mail sender function which is an independent function and can be called to send an otp in email
// 3. pre save hook which calls the mail sender function before saving a new document in the database
const OTPSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	otp: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
	},
});

// Define a function to send emails
async function sendVerificationEmail(email, otp) {
	// Create a transporter to send emails
	// Define the email options
	// Send the email
	try {
		const mailResponse = await mailSender(email,"Verification Email",emailTemplate(otp));
		console.log("Email sent successfully: ", mailResponse.response);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}

//we are using pre middleware because otp will be sent and verified before the 
//creating of db entry

// Define a pre -save hook to send email after the document has been saved
OTPSchema.pre("save", async function (next) {
	console.log("New document saved to database");

	// Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();
}); 

const OTP = mongoose.model("OTP", OTPSchema);

module.exports = OTP;



// Purpose

// Function to Send Verification Emails (sendVerificationEmail):
// The primary purpose is to handle the logic for sending an email. It takes the recipient's email 
// and OTP as arguments, creates the email content, and sends the email using the mailSender utility.
// It's a standalone function that can be called whenever you need to send a verification email.

// Pre-save Hook (OTPSchema.pre("save")):
// This is a Mongoose middleware function that runs automatically before a document is saved to the database.
// Its primary purpose is to ensure that certain actions (like sending a verification email) are 
// performed before the document is saved. In this case, it checks if the document is new and, if so, 
// calls the sendVerificationEmail function.

// **************************************************************************************
//basically there are 2 otp. one is created and stored in the db. other one is entered by the user which is compared with the one stored in the db

//auth -> sendotp function 
//creates the otp using .generate 
//saves the otp in db using .create

//auth -> signup
//find the most recent otp in the db for the particular user
//validate the otp fetched from the db
//compare the otp entered by the user with the db otp