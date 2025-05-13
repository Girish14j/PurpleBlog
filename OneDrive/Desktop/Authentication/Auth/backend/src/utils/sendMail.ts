import nodemailer from 'nodemailer';

export const sendWelcomeEmail = async (email: string, username: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // app password (not your actual password)
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to Our App!',
    html: `<h2>Hello ${username},</h2><p>Thank you for signing up! We're excited to have you on board. 🎉</p>`,
  };

  await transporter.sendMail(mailOptions);
};
