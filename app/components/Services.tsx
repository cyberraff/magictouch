import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const services = [
	{
		name: 'Ayuverda Spa',
		image: '/header-1.jpg',
		slug: 'slug',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias omnis delectus voluptatibus iusto obcaecati? Earum eaque quis ut quaerat eius amet ab, repellat aliquid, voluptas aliquam dolores animi dignissimos hic, itaque fugit ratione quos nihil molestiae iste alias recusandae!',
	},
	{
		name: 'Massage Spa',
		image: '/header-1.jpg',
		slug: 'slug',

		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias omnis delectus voluptatibus iusto obcaecati? Earum eaque quis ut quaerat eius amet ab, repellat aliquid, voluptas aliquam dolores animi dignissimos hic, itaque fugit ratione quos nihil molestiae iste alias recusandae!',
	},
	{
		name: 'Luxury Spa',
		image: '/header-1.jpg',
		slug: 'slug',

		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias omnis delectus voluptatibus iusto obcaecati? Earum eaque quis ut quaerat eius amet ab, repellat aliquid, voluptas aliquam dolores animi dignissimos hic, itaque fugit ratione quos nihil molestiae iste alias recusandae!',
	},
];

export default function Services() {
	return (
		<section className='bg-background py-16 lg:py-28 '>
			<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto '>
				<h2 className=' text-3xl lg:text-5xl font-bold text-center w-full pb-6'>
					Our Massage Services
				</h2>
				<div>
					<div className='md:flex gap-12'>
						{services.map((service, idx) => {
							return (
								<div key={idx} className='py-4'>
									<div>
										<h3 className='text-2xl font-bold pb-4'>
											{service.name}
										</h3>
										<Image
											src={service.image}
											width={400}
											height={400}
											alt='service image'
											className=' w-80'
										/>
										<p className=' text-base pt-4'>
											{service.description}
										</p>
										<Button className='mt-4 hover:bg-primary rounded-full py-5 px-8 lg:py-6 lg:px-10'>
											<Link href={service.slug}>
												Read More
											</Link>
										</Button>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
