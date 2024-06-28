import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export const prices = [
	{
		name: 'Ayuverda Spa',
		price: '30,000',
		slug: 'slug',
		description:
			'voluptatibus iusto obcaecati? Earum eaque quis utq, voluptas aliquam dolores animi dignissimos hic, itaque fugit ratione quos nihil molestiae iste alias!',
	},
	{
		name: 'Massage Spa',
		price: '25,000',
		slug: 'slug',

		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias omnis delectus vo!',
	},
	{
		name: 'Luxury Spa',
		price: '45,000',
		slug: 'slug',

		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias omnis delectus voluptatibus iusto obcaecati? Earum eaque quis ut',
	},
];

export default function PricingCard() {
	return (
		<div className='w-full mt-12 pt-12'>
			<div className='md:flex gap-12 '>
				{prices.map((price, idx) => {
					return (
						<div key={idx} className='py-10 md:py-4 md:w-full'>
							<div>
								<div className='bg-background p-8 rounded-sm'>
									<Card className=' md:h-[24rem] -mt-16 bg-primary'>
										<CardHeader>
											<CardTitle className=' text-2xl text-[#2d2d2d] font-bold'>
												{price.name}
											</CardTitle>
											<CardDescription className='pt-2 text-4xl font-extrabold text-background'>
												<span className='text-lg '>
													#
												</span>
												{price.price}
											</CardDescription>
										</CardHeader>
										<CardContent className='md:h-[10rem] text-base text-background'>
											{price.description}
										</CardContent>
										<CardFooter>
											<Button className='mt-4 hover:bg-primary rounded-full py-4 px-6 lg:py-5 lg:px-7 mx-auto'>
												<Link href={price.slug}>
													Read More
												</Link>
											</Button>
										</CardFooter>
									</Card>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
