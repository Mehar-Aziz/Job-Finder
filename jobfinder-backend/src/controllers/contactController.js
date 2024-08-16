import Contact from '../models/contactSchema';
import nodemailer from 'nodemailer';

export const submitContactForm = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host:'smtp.gmail.com',
      port:465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: req.body.email,           
      subject: 'Thank you for contacting us!',
      text: `Dear ${req.body.name},\n\nThank you for reaching out. We have received your message and will get back to you soon.\n\nBest regards,\nThe Team`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Contact form submitted successfully.' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: 'Error submitting contact form' });
  }
};
