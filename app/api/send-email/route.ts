import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request:Request) {
	const { name, email, message,phone } = await request.json();

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		host: 'smtp.gmail.com',
		secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS, // Use environment variables for security
		},
		
	});

	const mailOptions = {
		from: email,
		to: 'magictouchintspa@gmail.com',
		subject: `New message from ${name}`,
		text: `Dear Admin,

I hope this message finds you well. A new contact form submission has been received. Below are the details:

Client Name: ${name}
Email: ${email}
Phone Number: ${phone}
Message: ${message}

Please follow up with the client as soon as possible.

Thank you.

Best regards,
MagicTouch Int Spa Management.

All rights Reserved.
`,
	};	
	
	try {
		await transporter.sendMail(mailOptions);
		return NextResponse.json({ message: 'Email sent successfully' });
	} catch (error) {
		return NextResponse.json(
			{ message: 'Error sending email', error },
			{ status: 500 },
		);
	}
}
