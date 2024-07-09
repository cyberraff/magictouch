import React from 'react';

import { PortableText } from '@portabletext/react';
import { client, urlFor } from '@/sanity/config/sanity.utils';
import Image from 'next/image';
import FormattedDate from '../components/FormatedDate';
import { FaInstagram, FaXTwitter, FaFacebookF } from 'react-icons/fa6';
import { PortableTextBlock } from 'sanity';

interface fullBlog {
	_id: string;
	title: string;
	date: string;
	slug: string;
	coverImage: string;
	coverImageAlt?: string;
	content: PortableTextBlock[];
	author: Author;
}
interface Author {
	name: string;
	picture: string;
	about: PortableTextBlock[];
	socialMedia: SocialMediaLink[];
}

interface SocialMediaLink {
	platform: string;
	url: string;
}
async function getData(slug: string) {
	const query = `*[_type=="blogPost"  && slug.current == "${slug}"][0]{
  _id,
title,
date,
  
  "slug": slug.current,
  "coverImage": coverImage.asset->url,
  "coverImageAlt": coverImage.alt,
  content,
  "author": author->{
    name,
   "picture":picture.asset->url,
    about,
    socialMedia
  }}`;
	const data = await client.fetch(query);
	return data;
}

type Props = {
	params: { slug: string };
};

export default async function page({ params }: Props) {
	const blog: fullBlog = await getData(params.slug);

	return (
		<>
			<section id='Services' className='bg-background py-16 lg:py-28 '>
				<div className='px-4 sm:px-6 max-w-4xl py-2 bg-background lg:max-w-4xl mx-auto '>
					<Image
						src={blog.coverImage}
						width={400}
						height={400}
						alt={blog.coverImageAlt || ''}
						className='w-full'
					/>
					<div className='mt-4'>
						<h2 className='text-3xl lg:text-5xl font-bold w-full pb-6'>
							{blog.title}
						</h2>
						<div className='text-sm'>
							<p>
								Posted by{' '}
								<span className='font-bold'>
									{blog.author.name}
								</span>
							</p>
							<p>
								Posted on{' '}
								<FormattedDate dateString={blog.date} />
							</p>
						</div>
					</div>
					<div className='text-lg text-gray-700 mt-10'>
						<PortableText value={blog.content} />
					</div>
				</div>
				<div className='w-full border mt-24'></div>
				<div className='px-4 sm:px-6 max-w-2xl py-2 bg-background lg:max-w-2xl mx-auto '>
					<div className='w-fit mx-auto content-center justify-center mt-12 text-sm '>
						<Image
							src={blog.author.picture}
							width={200}
							height={200}
							alt={blog.author.picture}
							className='w-[5rem] h-[5rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-full mx-auto'
						/>
						<p className='font-bold mt-4 w-fit mx-auto'>
							{blog.author.name}
						</p>
						<div className='text-gray-700 mt-10 mx-auto'>
							<PortableText value={blog.author.about} />
						</div>
						<div>
							<ul className='flex w-fit mx-auto mt-4'>
								{blog.author.socialMedia.map(
									(social, index) => (
										<li key={index}>
											{social.platform === 'Instagram' ? (
												<a
													href={social.url}
													target='_blank'
													rel='noreferrer'>
													<FaInstagram className='text-2xl mx-2' />
												</a>
											) : social.platform === 'X' ? (
												<a
													href={social.url}
													target='_blank'
													rel='noreferrer'>
													<FaXTwitter className='text-2xl mx-2' />
												</a>
											) : (
												<a
													href={social.url}
													target='_blank'
													rel='noreferrer'>
													<FaFacebookF className='text-2xl mx-2' />
												</a>
											)}
										</li>
									),
								)}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
