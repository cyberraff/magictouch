import React from 'react';
import { client, urlFor } from '@/sanity/config/sanity.utils';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const links = [
	{ name: 'Contact Us', href: '/#contact' },
	{ name: 'Read More', href: '/About' },
];

async function getData() {
	const query = '*[_type=="heroImage"][0]';
	const data = await client.fetch(query);
	return data;
}
export default async function Hero() {
	// const data = await getData();

	return (
		<section className='bg-background py-16 lg:py-28 '>
			<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto md:flex'>
				<div className=' md:w-[35%]'>
					<div className=' text-5xl lg:text-7xl '>
						<h1>Magic</h1>
						<h1 className=' pl-8 lg:pl-12 font-extrabold pt-4 text-6xl lg:text-8xl'>
							Touch
						</h1>
					</div>
					<p className='py-12 pr-4'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatibus eligendi nisi blanditiis, ut consequuntur
						vel itaque non.
					</p>
					<div className='flex gap-2'>
						{links.map((link, idx) => {
							return (
								<Button
									key={idx}
									className='hover:bg-primary rounded-full py-6 px-8 lg:py-7 lg:px-10'>
									<Link href={link.href}>{link.name}</Link>
								</Button>
							);
						})}
						{/* <Button>Read More</Button> */}
					</div>
				</div>
				<div className=' md:w-[65%] gap-6 md:flex pt-10'>
					<Image
						// src={urlFor(data.image1).url()}
						src='/header-1.jpg'
						alt='Great Image'
						width={450}
						height={450}
						priority
						className=' md:w-1/2 md:h-5/6 rounded-sm rounded-tr-[5rem] rounded-bl-[5rem] md:mt-8 '
					/>

					<Image
						// src={urlFor(data.image2).url()}
						src='/header-1.jpg'
						alt='Great Image'
						width={450}
						height={450}
						priority
						className='md:w-1/2 md:h-5/6 rounded-sm rounded-tl-[5rem] rounded-br-[5rem] md:-mt-8 mt-6'
					/>
				</div>
			</div>
		</section>
	);
}
