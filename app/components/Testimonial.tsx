'use client';
import React from 'react';
import { client } from '@/sanity/config/sanity.utils';

import EmblaCarousel from './Carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import './Carousel/css/embla.css';


interface Testimonial {
	_id: string;
	name: string;
	about:string
	image: string;
	testimony: string;
}

async function getData() {
	const query = `*[_type=="testimonial"]{
  	_id,
    name,
	about,
    "image":image.asset->url,
    testimony,
    }`;
	const data: Testimonial[] = await client.fetch(query);
	return data;
}

export default async function Testimonial() {

	const testimonial= await getData()

	const OPTIONS: EmblaOptionsType = { loop: true };
	const SLIDE_COUNT = testimonial.length;
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

	return (
		<section className='bg-background  pt-16 lg:pt-28 pb-8 lg:pb-14'>
			<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto '>
				<h2 className=' text-3xl lg:text-5xl font-bold text-center w-full pb-8 mb-8'>
					Testimonials
				</h2>
				<EmblaCarousel
					slides={SLIDES}
					options={OPTIONS}
					testimonial={testimonial}
				/>
			</div>
		</section>
	);
}
