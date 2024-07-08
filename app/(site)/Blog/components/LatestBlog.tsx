import React from 'react'
import { client, urlFor } from '@/sanity/config/sanity.utils';
// import { PortableText } from '@portabletext/react';
import Image from "next/image";
import Link from "next/link";


async function getData() {
	const query = `*[_type=="blogPost"]{
  _id,
    title,
  "slug": slug.current,
  "coverImage": coverImage.asset->url,
  "coverImageAlt": coverImage.alt,
  excerpt}[0]`;
	const data = await client.fetch(query);
	return data;
}


export default async function LatestBlog() {
	const data = await getData();

	// const { title, _id, coverImage, excerpt } = data;
	return (
		<>
			<div className=' px-4 sm:px-6 max-w-5xl pb-12 bg-background lg:max-w-7xl  mx-auto '>
				<div>
					<h2 className=' text-2xl lg:text-5xl font-bold text-center w-full pb-12'>
						Latest
					</h2>
					<Link
						href={`/Blog/${data.slug}`}
						className='flex flex-col border rounded-lg p-12 lg:flex-row-reverse justify-center items-center'>
						<Image
							src={data.coverImage}
							width={400}
							height={400}
							alt={data.coverImageAlt}
							className=' lg:w-[40%]  rounded-lg'
						/>
						<div className='lg:w-[60%] px-4 text-center lg:pr-8 lg:text-start pt-4 lg:pt-0 '>
							<p className=" font-bold text-xl lg:text-2xl pb-4">{data.title}</p>
							<p>{data.excerpt}</p>
						</div>
					</Link>
					{/* <div className='text-lg text-gray-700 mt-10'>
				<PortableText value={content} />
			</div> */}
				</div>
			</div>
		</>
	);
}
