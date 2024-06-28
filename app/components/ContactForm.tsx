'use client';
import React from 'react';

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

type ContactFormSchemaType = z.infer<typeof formSchema>;

const formSchema = z.object({
	doa: z.date({
		required_error: 'Pease select Appointment date.',
	}),
	username: z
		.string()
		.min(2, {
			message: 'Username must be at least 2 characters.',
		})
		.max(30, {
			message: 'Username must be at most 30 characters.',
		}),
	time: z
		.string({
			required_error: 'Please select Appointment time.',
		})
		.min(2, { message: 'Please select Appointment time' }),
	// phone: z
	// 	.string()
	// 	.min(2, {
	// 		message: 'Username must be at least 2 characters.',
	// 	})
	// 	.max(30, {
	// 		message: 'Username must be at most 30 characters.',
	// 	}),
	// massageType: z
	// 	.string()
	// 	.min(2, {
	// 		message: 'Username must be at least 2 characters.',
	// 	})
	// 	.max(30, {
	// 		message: 'Username must be at most 30 characters.',
	// 	}),
	// time: z
	// 	.string()
	// 	.min(2, {
	// 		message: 'Username must be at least 2 characters.',
	// 	})
	// 	.max(30, {
	// 		message: 'Username must be at most 30 characters.',
	// 	}),
	// date: z
	// 	.string()
	// 	.min(2, {
	// 		message: 'Username must be at least 2 characters.',
	// 	})
	// 	.max(30, {
	// 		message: 'Username must be at most 30 characters.',
	// 	}),
	// message: z
	// 	.string()
	// 	.min(2, {
	// 		message: 'Username must be at least 2 characters.',
	// 	})
	// 	.max(30, {
	// 		message: 'Username must be at most 30 characters.',
	// 	}),
});
const times = [
	{ time: '9:00 am-10:00 am' },
	{ time: '10:00 am-11:00 am' },
	{ time: '11:00 am-12:00 noon' },
];
export default function ContactForm() {
	// 1. Define your form.
	const form = useForm<ContactFormSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			doa: undefined,
			time: '',
		},
	});
	// 2. Define a submit handler.
	function onSubmit(values: ContactFormSchemaType) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8 bg-white'>
				<FormField
					control={form.control}
					name='doa'
					render={({ field }) => (
						<FormItem className='flex flex-col'>
							{/* <FormLabel>Date of birth</FormLabel> */}
							<FormControl>
								<Button
									variant={'outline'}
									className={cn(
										'w-[240px] pl-3 text-left font-normal',
										!field.value && 'text-muted-foreground',
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
								initialFocus
							/>
							<FormDescription>
								Your date of birth is used to calculate your
								age.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
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
									{/* <SelectItem value='m@example.com'>
										m@example.com
									</SelectItem>
									<SelectItem value='m@google.com'>
										m@google.com
									</SelectItem>
									<SelectItem value='m@support.com'>
										m@support.com
									</SelectItem> */}
								</SelectContent>
							</Select>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder='shadcn' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>{' '}
				{/* <FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder='shadcn' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>{' '}
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder='shadcn' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>{' '}
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder='shadcn' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>{' '}
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder='shadcn' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>{' '}
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder='shadcn' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/> */}
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	);
}
