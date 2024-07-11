import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { DateTime } from 'luxon';

interface EmailData {
	name: string;
    doa:Date,
    time:string,
	email: string;
	phone: string;
	massageType: string;
}

export async function POST(request: Request) {
	const { name, email, doa, phone,time,massageType }:EmailData = await request.json();

const appointmentDateTime = DateTime.fromISO(`${doa}`).setZone(
	'Africa/Lagos',
); 

  const formattedDate = appointmentDateTime.toLocaleString(DateTime.DATE_MED);
  const formattedTime = appointmentDateTime.toLocaleString(
		DateTime.TIME_SIMPLE,
  );

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

I hope this message finds you well. This mail is to inform you that a new massage appointment has been scheduled. Below are the details of the appointment:

Client Name: ${name}
Email: ${email}
Phone Number: ${phone}
Date of Appointment: ${formattedDate}
Time of Appointment: ${time}
Type of Massage: ${massageType}

Please ensure that the necessary preparations are made to accommodate the client at the specified time.

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
