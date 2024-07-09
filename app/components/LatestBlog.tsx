import { Button } from "@/components/ui/button";
import { client, urlFor } from '@/sanity/config/sanity.utils';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface simplifiedBlog {
	_id: string;
	coverImage: string;
	coverImageAlt: string;
	slug: string;
	excerpt: string;
	title: string;
}

async function getData() {
	const query = `*[_type=="blogPost"]{
  _id,
    title,
  "slug": slug.current,
  "coverImage": coverImage.asset->url,
  "coverImageAlt": coverImage.alt,
  excerpt}`;
	const data = await client.fetch(query);
	return data;
}
export default async function AllBlog() {
	const data: simplifiedBlog[] = await getData();
	return (
		<>
			<section className='bg-background py-16 lg:py-28 '>
				<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto '>
					<h2 className=' text-3xl lg:text-5xl font-bold text-center w-full pb-6'>
					Latest Blog
					</h2>
			

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 gap-8'>
						{data.map((blog) => {
							return (
								<Link
									href={`/Blog/${blog.slug}`}
									key={blog._id}
									className=' justify-center items-center border rounded-lg p-4 bg-background'>
									<Image
										src={blog.coverImage}
										width={400}
										height={400}
										alt={blog.coverImageAlt}
										className='mx-auto  rounded-lg'
									/>
									<div className='px-4 text-center pt-4'>
										<p className=' font-bold text-xl pb-4'>
											{blog.title}
										</p>
										<p>{blog.excerpt}</p>
									</div>
								</Link>
							);
						})}
					</div>
					<div className=" w-full mx-auto text-center ">
					
						<Button className=" md:p-6">
							<Link href='/Blog'>Read More</Link>
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
