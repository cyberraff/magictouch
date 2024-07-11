'use client';
import React, {useState} from 'react';

import { any, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Clock10 } from 'lucide-react';

import { useToast } from '@/components/ui/use-toast';

type AppointmentFormSchemaType = z.infer<typeof formSchema>;

const formSchema = z.object({
	doa: z.date({
		required_error: 'Pease select Appointment date.',
	}),
	name: z
		.string()
		.min(2, {
			message: 'Name must be at least 2 characters.',
		})
		.max(30, {
			message: 'Name must be at most 30 characters.',
		}),
	time: z
		.string({
			required_error: 'Please select Appointment time.',
		})
		.min(2, { message: 'Please select Appointment time' }),
	phone: z
		.string()
		.min(11, {
			message: 'Phone number incomplete.',
		})
		.max(15, {
			message: 'Phone number too long.',
		}),
	email: z.string().email().max(50, {
		message: 'Username must be at most 30 characters.',
	}),
	massageType: z
		.string({ required_error: 'Please select Massage Type' })
		.min(2, {
			message: 'Please select Massage Type.',
		}),
});
const times = [
	{ time: '9:00 am-10:00 am' },
	{ time: '10:00 am-11:00 am' },
	{ time: '11:00 am-12:00 noon' },
];
const massages = [
	{ name: 'Ayuverda Spa' },
	{ name: 'Massage Spa' },
	{ name: 'Luxury Spa' },
];
export default function AppointmentForm() {

	const [responseMessage, setResponseMessage] = useState<string>('');
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

	// 1. Define your form.
	const form = useForm<AppointmentFormSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			doa: undefined,
			time: '',
			phone: '',
			email: '',
			massageType: '',
		},
	});

	const { toast } = useToast();
	// 2. Define a submit handler.
	async function onSubmit(values: AppointmentFormSchemaType) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		 setIsSubmitting(true);
			const response = await fetch('/api/send-appointment', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values),
			});
			const result = await response.json();
			 if (response.ok) {
					setIsSuccess(true);
					 setIsSubmitting(false);
					setResponseMessage(
						'Your appointment has been scheduled successfully.',
					);
				} else {
					setIsSuccess(false);
					 setIsSubmitting(false);
					setResponseMessage(
						'There was an error scheduling your appointment. Please try again.',
					);
				}
							
									toast({
										title: `${responseMessage}`,
									});
							
			// setResponseMessage(result.message);

			// console.log(values);
			// console.log(result);
	}
	
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='md:flex space-y-8 py-8 bg-background  md:px-12 gap-0 w-10/12 md:w-[75%] lg:w-[60%]  mx-auto rounded-3xl '>
				<div className='w-full lg:w-1/2 justify-center content-center'>
					{' '}
					<FormField
						control={form.control}
						name='doa'
						render={({ field }) => (
							<FormItem className='flex flex-col w-full'>
								<FormControl>
									<Button
										variant={'outline'}
										className={cn(
											'w-[240px] pl-3 text-left font-normal mx-auto ',
											!field.value &&
												'text-muted-foreground',
										)}>
										{field.value ? (
											format(field.value, 'PPP')
										) : (
											<span>Pick a date</span>
										)}
										<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
									</Button>
								</FormControl>

								<Calendar
									mode='single'
									selected={field.value}
									onSelect={field.onChange}
									disabled={(date) => date < new Date()}
									className='mx-auto'
								/>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className='w-full lg:w-1/2 space-y-8 justify-center content-center md:mt-0 px-8 sm:px-12 '>
					<FormField
						control={form.control}
						name='time'
						render={({ field }) => (
							<FormItem>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder='Select time for appointment' />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{times.map((time, idx) => {
											return (
												<SelectItem
													key={idx}
													value={time.time}>
													<p className='flex'>
														{' '}
														<Clock10 className='w-4 pb-1 mr-2 ' />
														{time.time}
													</p>
												</SelectItem>
											);
										})}
									</SelectContent>
								</Select>

								<FormMessage />
							</FormItem>
						)}
					/>{' '}
					<FormField
						control={form.control}
						name='massageType'
						render={({ field }) => (
							<FormItem>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder='Select massage type' />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{massages.map((massage, idx) => {
											return (
												<SelectItem
													key={idx}
													value={massage.name}>
													<p className='flex'>
														{/* {' '} */}
														{/* <Clock10 className='w-4 pb-1 mr-2 ' /> */}
														{massage.name}
													</p>
												</SelectItem>
											);
										})}
									</SelectContent>
								</Select>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder='Enter your name'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>{' '}
					<FormField
						control={form.control}
						name='phone'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder='Enter your phone number'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>{' '}
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder='Enter your email address'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>{' '}
					<Button
						className='w-full'
						type='submit'
						disabled={isSubmitting}>
						{isSubmitting
							? 'Scheduling...'
							: 'Schedule Appointment'}
						
					</Button>
		{/* display email response under button */}
					{/* {responseMessage && (
						<p style={{ color: isSuccess ? 'green' : 'red' }} className=" text-xs">
							{responseMessage}
						</p>
					)} */}
				</div>
			</form>
		</Form>
	);
}
