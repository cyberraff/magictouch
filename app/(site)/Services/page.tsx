import Image from 'next/image';
import React from 'react';
import { client } from '@/sanity/config/sanity.utils';
import { PortableTextBlock } from 'sanity';
import { PortableText } from 'next-sanity';

interface Service {
	// slice ( arg0: number ): unknown;
	_id: string;
	name: string;
	image: string;
	excerpt: string;
	content: PortableTextBlock[];
}

async function getData() {
	const query = `*[_type=="service"]{
  	_id,
    name,
    "image":image.asset->url,
    content,excerpt,
    }`;
	const data: Service[] = await client.fetch(query);
	return data;
}
export default async function Services() {
	const services = await getData();

	return (
		<section id='Services' className='bg-background py-16 lg:py-28 '>
			<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto '>
				<h2 className=' text-3xl lg:text-5xl font-bold text-center w-full pb-6'>
					Our Services
				</h2>
				<div className='md:grid lg:grid-cols-3 gap-12 md:w-full'>
					{services.map((service, idx) => {
						return (
							<div key={idx} className='py-4 flex-1'>
								<div>
									<h3 className='text-2xl font-bold pb-4 underline'>
										{service.name}
									</h3>
									<Image
										src={service.image}
										width={400}
										height={400}
										alt='service image'
										className=' w-80 h-48 rounded-lg'
									/>
									<div className=' text-base pt-4'>
										<PortableText value={service.content} />
									
									</div>
								</div>
							</div>
						);
					})}
				</div>
				{/* <div className=' w-full flex justify-center'>
					<Button className='mt-4 mx-auto  hover:bg-primary rounded-full py-5 px-8 lg:py-6 lg:px-10'>
						<Link href='/Services'>Read More</Link>
					</Button>
				</div> */}
			</div>
		</section>
	);
}
