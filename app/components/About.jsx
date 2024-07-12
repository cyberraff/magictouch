import { client, urlFor } from '@/sanity/config/sanity.utils';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


async function getData(){
	const query = `*[_type=="images" && name =="About us"][0]{
    name,
    "image":image.asset->url,
    }`;
	const data = await client.fetch(query);
	return data;
}


export default async function About() {
	const data = await getData();
	return (
		<div id='About' className='bg-primary py-16 lg:py-28 mt-12'>
			<div className=' px-4 sm:px-6 max-w-5xl py-2 lg:max-w-7xl  mx-auto '>
				<div className=' md:flex md:flex-row-reverse'>
					<div className='md:w-1/2 md:pb-4 md:px-12'>
						<h3 className='text-3xl md:text-4xl font-bold pb-4'>
							About Our Spa
						</h3>
						<p className='pb-4 text-base'>
							Welcome to MagicTouch, where tranquility and
							rejuvenation await you. Nestled in the heart of
							LagosCity our luxurious spa offers a sanctuary for
							relaxation and wellness, providing a respite from
							the hustle and bustle of everyday life. <br />
							At MagicTouch, we believe in the power of self-care
							and holistic healing, we are dedicated to providing
							personalized treatments that cater to your
							individual needs, ensuring a truly rejuvenating
							experience for body, mind, and soul.
						</p>
						<Button className='mt-4 hover:bg-primary rounded-full py-5 px-8 lg:py-6 lg:px-10'>
							<Link href='/About'>Read More</Link>
						</Button>
					</div>
					<div className=' h-16 py-12 md:hidden'> </div>
					<div className='md:w-1/2 w-full'>
						<div className=' bg-[#2d2d2d] p-8 rounded-sm'>
							<Image
								src={data.image}
								alt='about image'
								width={400}
								height={400}
								className='w-full -mt-16 rounded-sm '
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
