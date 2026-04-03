import nodemailer from 'nodemailer';

export const sendContactEmail = async (req, res) => {
  const { fullName, email, phone, companyName, region, services, projectDetails } = req.body;

  // 1. Transporter Setup (Aapka Email Provider)
  // Note: Agar aap Gmail use kar rahe hain toh 'App Password' chahiye hoga
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'aapka-email@gmail.com', // Yahan apna email likhein
      pass: 'xxxx xxxx xxxx xxxx',    // Gmail App Password yahan ayega
    },
  });

  // 2. Email Template
  const mailOptions = {
    from: email,
    to: 'info@expertopinions.online',
    subject: `New Inquiry: ${fullName} from ${companyName}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #7c3aed;">
        <h2 style="color: #7c3aed;">New Business Inquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>Services Needed:</strong> ${services.join(', ')}</p>
        <p><strong>Project Details:</strong></p>
        <div style="background: #f4f4f4; padding: 10px; border-radius: 5px;">${projectDetails}</div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Email sending failed.' });
  }
};