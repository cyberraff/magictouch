'use client';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: 'Name must be at least 2 characters.',
		})
		.max(50, {
			message: 'Name must be at most 50 characters.',
		}),
	email: z.string().email({ message: 'Invalid email address' }),
	phone: z
		.string()
		.min(2, {
			message: 'Phone must be at least 10 characters.',
		})
		.max(50, {
			message: 'Phone must be at most 18 characters.',
		}),
	message: z
		.string()
		.min(10, {
			message: 'Message must be at least 10 characters.',
		})
		.max(450, { message: 'Message is too long.' }),
});
export default function Contact() {

	const [responseMessage, setResponseMessage] = useState<string>('');
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
		},
	});

	const {toast}=useToast()
	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {

		 setIsSubmitting(true);
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values),
			});
			const result = await response.json();
			 if (response.ok) {
					setIsSuccess(true);
					setIsSubmitting(false);
					setResponseMessage(
						'Your message has been sent successfully.',
					);
				} else {
					setIsSuccess(false);
					setIsSubmitting(false);
					setResponseMessage(
						'There was an error sending your message. Please try again.',
					);
				}

				toast({
					title: `${responseMessage}`,
				});
							
	}
	return (
		<section className='bg-background  pt-16 lg:pt-28 pb-8 lg:pb-14'>
			<div className=' px-8 sm:px-12 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto '>
				<div className='lg:flex gap-8 text-sm text-[#2d2d2d}'>
					<div className=' flex-initial lg:w-[25rem] ml-auto '>
						<h3 className=' text-2xl font-bold pb-2'>
							Get in Touch
						</h3>
						<p className='pb-8'>
							Have a question or want to book an appointment? Fill
							out the form and we'll get back to you as soon as
							possible.
						</p>

						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='space-y-4 '>
								<div className='lg:flex lg:gap-4 w-full space-y-4 lg:space-y-0'>
									<FormField
										control={form.control}
										name='name'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Name</FormLabel>
												<FormControl>
													<Input
														className=' placeholder:text-xs'
														placeholder='Name'
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='email'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input
														className=' placeholder:text-xs'
														placeholder='Email'
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<FormField
									control={form.control}
									name='phone'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Phone</FormLabel>
											<FormControl>
												<Input
													className=' placeholder:text-xs'
													placeholder='Phone'
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='message'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Message</FormLabel>
											<FormControl>
												<Textarea
													className=' placeholder:text-xs'
													placeholder='Message'
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>

								<Button
									className='w-full'
									type='submit'
									disabled={isSubmitting}>
									{isSubmitting
										? 'Sending...'
										: 'Send'}
								</Button>
							</form>
						</Form>
					</div>
					<div className=' flex-initial lg:w-[20rem] mr-auto lg:mt-0 mt-8 '>
						<h4 className='text-xl font-bold pb-1'>Our Location</h4>
						<p className='pb-4'>
							Visit us at our massage studio in the heart of the
							city.
						</p>
						<h4 className='text-lg font-bold pb-1'>Address</h4>
						<p className='pb-4'>123 Main St, City, State, 12345</p>
						<h4 className='text-lg font-bold pb-1'>Address</h4>
						<p className='pb-4'>
							Monday - Friday: 9am - 7pm <br />
							Saturday: 10am - 5pm <br />
							Sunday: Closed
						</p>
						<h4 className='text-lg font-bold pb-1'>Map</h4>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.72499367686882!2d3.3627070239723214!3d6.572074112772259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1720617730419!5m2!1sen!2sng'
							width='400'
							height='300'
							style={{ border: '0' }}
							referrerPolicy='no-referrer-when-downgrade'></iframe>
					</div>
				</div>
			</div>
		</section>
	);
}
