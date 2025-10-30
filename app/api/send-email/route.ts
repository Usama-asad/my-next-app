import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Handle POST requests
export async function POST(req) {
  try {
    const { name, email } = await req.json();

    // 1. Validate incoming data
    if (!name || !email) {
      return NextResponse.json({ message: 'Name and email are required.' }, { status: 400 });
    }
    if (!email.includes('@')) { // Basic email format validation
        return NextResponse.json({ message: 'Invalid email format.' }, { status: 400 });
    }

    // 2. Create a Nodemailer transporter
    // Use your email service credentials from environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or 'outlook', 'sendgrid', 'smtp.yourdomain.com'
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Define the email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.EMAIL_USER, // Recipient (can be another email or same as sender)
      subject: 'New Subscriber: Website Contact Form',
      html: `
        <p>You have a new subscriber!</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>They accepted the terms and conditions.</p>
      `,
    };

    // 4. Send the email
    await transporter.sendMail(mailOptions);

    // 5. Respond to the client
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    // You might want to be more specific with error messages for debugging
    return NextResponse.json({ message: 'Failed to send email.', error: error.message }, { status: 500 });
  }
}