// 'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export const services = [
	{
		name: 'Swedish Massage',
		image: '/header-1.jpg',
		slug: 'slug',
		description:
			'A classic massage technique that uses long, flowing strokes to promote relaxation and improve circulation.',
	},
	// {
	// 	name: 'DeepTissue Massage',
	// 	image: '/header-1.jpg',
	// 	slug: 'slug',

	// 	description:
	// 		'A targeted massage that focuses on the deeper layers of muscle tissue to relieve chronic tension and pain.',
	// },
	{
		name: 'Hot Stone Massage',
		image: '/header-1.jpg',
		slug: 'slug',

		description:
			'A soothing and therapeutic massage that uses heated stones to melt away muscle tension and promote deep relaxation.',
	},
	// {
	// 	name: 'Prenatal Massage',
	// 	image: '/header-1.jpg',
	// 	slug: 'slug',
	// 	description:
	// 		'A specialized massage designed to provide relief for expectant mothers, addressing the unique physical and emotional needs of pregnancy.',
	// },
	{
		name: 'Sports Massage',
		image: '/header-1.jpg',
		slug: 'slug',
		description:
			'A specialized massage that focuses on the specific needs of athletes, helping to prevent injuries, improve performance, and aid in recovery.',
	},
	// {
	// 	name: 'Aromatherapy Massage',
	// 	image: '/header-1.jpg',
	// 	slug: 'slug',
	// 	description:
	// 		'A relaxing and therapeutic massage that incorporates the use of essential oils to enhance the benefits of the massage and promote overall well-being.',
	// },
	{
		name: 'Couples Massage',
		image: '/header-1.jpg',
		slug: 'slug',
		description:
			'A shared experience where two people receive massages simultaneously, allowing them to connect and unwind together.',
	},
	// {
	// 	name: 'Corporate Massage',
	// 	image: '/header-1.jpg',
	// 	slug: 'slug',
	// 	description:
	// 		'On-site massage services tailored to the needs of businesses, helping to reduce stress, improve productivity, and promote employee well-being.',
	// },
];

export default function Services() {
	return (
		<section id='Services' className='bg-background py-16 lg:py-28 '>
			<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto '>
				<h2 className=' text-3xl lg:text-5xl font-bold text-center w-full pb-6'>
					Our Services
				</h2>
				<div className='md:flex gap-12 md:w-full'>
					{services.map((service, idx) => {
						return (
							<div key={idx} className='py-4 flex-1'>
								<div>
									<h3 className='text-2xl font-bold pb-4'>
										{service.name}
									</h3>
									<Image
										src={service.image}
										width={400}
										height={400}
										alt='service image'
										className=' w-80 h-48'
									/>
									<p className=' text-base pt-4'>
										{service.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
				<div className=' w-full flex justify-center'>
					<Button className='mt-4 mx-auto  hover:bg-primary rounded-full py-5 px-8 lg:py-6 lg:px-10'>
						<Link href='/Services'>Read More</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
