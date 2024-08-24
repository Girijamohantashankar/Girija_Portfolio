import { connectToDatabase } from "../../lib/mongodb";
import Contact from "../../models/Contact";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectToDatabase();
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res
          .status(400)
          .json({ success: false, message: "All fields are required" });
      }
      const newContact = new Contact({ name, email, message });
      await newContact.save();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,  
          pass: process.env.EMAIL_PASS,
        },
      });
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECEIVER,
        subject: "New Contact Message",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
            <h2 style="background-color: #f8f9fa; padding: 10px; text-align: center; color: #007bff;">New Contact Message</h2>
            
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f1f1f1; padding: 15px; border-left: 5px solid #007bff;">${message}</p>
            
            <footer style="margin-top: 20px; padding-top: 10px; border-top: 1px solid #ddd;">
              <p>This email was sent from your website contact form.</p>
            </footer>
          </div>
        `,
      };      
      await transporter.sendMail(mailOptions);
      return res.status(201).json({ success: true, message: "Message sent!" });
    } catch (error) {
      console.error("Error saving contact or sending email:", error.message);
      return res
        .status(500)
        .json({ success: false, message: "Server error: " + error.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
