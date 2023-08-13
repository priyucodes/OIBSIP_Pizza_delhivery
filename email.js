const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.HOST || "sandbox.smtp.mailtrap.io",
      port: Number(process.env.EMAIL_PORT) || 2525,
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER || process.env.TRAP_USER,
        pass: process.env.PASS || process.env.TRAP_PASS,
      },
      from: process.env.USER || process.env.TRAP_USER,
    });

    await transporter.sendMail({
      from: process.env.USER || process.env.TRAP_USER,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.log("Email not sent!");
    console.log(error);
    return error;
  }
};
