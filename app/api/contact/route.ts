import { error } from 'console';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json(); 
    console.log("Form Data Received:", formData);

    const nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
        user: process.env.MY_EMAIL,
        pass: process.env.EMAIL_PASS
      }
    })

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.EMAIL_TO,
      subject: 'Test',
      text: 'Hello World, How are you!'
    }

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully.');
    } catch (error) {
      console.error('Error sending email:', error);
    }
    









    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error("Error handling form data:", error);
    return NextResponse.json({ message: 'Failed to submit form' }, { status: 500 });
  }
}