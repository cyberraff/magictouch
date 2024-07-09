// 'use client';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/config/sanity.utils';
import { PortableTextBlock } from "sanity";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PortableText } from "next-sanity";


interface Service {
	// slice ( arg0: number ): unknown;
	_id: string;
	name: string;
	image: string;
	excerpt:string;
	content: PortableTextBlock[];
}

async function getData() {
	const query = `*[_type=="service"]{
  	_id,
    name,
    "image":image.asset->url,
    content,excerpt,
    }`;
	const data:Service[] = await client.fetch(query);
	return data;
}
export default async function Services() {
	const services= await getData()
	// const limitedService= services.slice(0, 3)
	 const filteredServices = services.filter((service) => {
			// Replace 'Swedish Massage', 'Hot Stone Massage', and 'Couples Massage' with the names of your desired services
			return [
				'Swedish Massage',
			
				'Couples Massage',
				'Deep Tissue Massage',
			].includes(service.name);
		});
	return (
		<section id='Services' className='bg-background py-16 lg:py-28 '>
			<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto '>
				<h2 className=' text-3xl lg:text-5xl font-bold text-center w-full pb-6'>
					Our Services
				</h2>
				<div className='md:flex gap-12 md:w-full'>
					{filteredServices.map((service, idx) => {
						const halfContent = service.content.slice(0, 50);
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
										{service.excerpt.slice(0, 150)}...{' '}
										<Link
											href='/Services'
											className=' text-primary hover:text-[#2d2d2d]'>
											Read More
										</Link>
									</p>
								</div>
							</div>
						);
					})}
				</div>
				<div className=' w-full flex justify-center'>
					<Button className='mt-4 mx-auto  hover:bg-primary rounded-full py-5 px-8 lg:py-6 lg:px-10'>
						<Link href='/Services'>See More</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
