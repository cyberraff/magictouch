import React from 'react';
import AppointmentForm from './AppointmentForm';

export default function Contact() {
	return (
		<div className=' py-16 lg:py-28 '>
			<h2 className=' text-3xl lg:text-5xl font-bold text-center w-full pb-12'>
				Schedule Appointment
			</h2>
			<AppointmentForm />
		</div>
	);
}
