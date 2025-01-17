// pages/api/sendEmail.js

import nodemailer from "nodemailer";

const mailList = [
  "profx201926@gmail.com",
  "noemiligpitan26@gmail.com",
  "noaligpitan26@gmail.com",
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "noaligpitan26@gmail.com",
      pass: "lqzwdvryzsptkmnm",
    },
  });

  // Create the email
  const mailOptions = {
    from: "noaligpitan@email.com",
    to: email,
    subject: `Subject of the ${email}`,
    text: `Message from ${name},\n\n Message: ${message}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Error sending email" });
  }
}
