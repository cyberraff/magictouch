'use client';
import React from 'react';
import EmblaCarousel from './Carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import './Carousel/css/embla.css';

export const services = [
	{
		name: 'Ayuverda Spa',
		about: 'CEO Amandianaze',
		image: '/header-1.jpg',
		slug: 'slug',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias omnis delectus voluptatibus iusto obcaecati? Earum eaque quis ut quaerat eius amet ab, repellat aliquid, voluptas aliquam dolores animi dignissimos hic, itaque fugit ratione quos nihil molestiae iste alias recusandae!',
	},
	{
		name: 'Massage Spa',
		about: 'Lagos Big Girl',
		image: '/header-1.jpg',
		slug: 'slug',

		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias omnis delectus voluptatibus iusto obcaecati? Earum eaque quis ut quaerat eius amet ab, repellat aliquid, voluptas aliquam dolores animi dignissimos hic, itaque fugit ratione quos nihil molestiae iste alias recusandae!',
	},
	{
		name: 'Luxury Spa',
		about: 'Lagos Big boy',
		image: '/header-1.jpg',
		slug: 'slug',

		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias omnis delectus voluptatibus iusto obcaecati? Earum eaque quis ut quaerat eius amet ab, repellat aliquid, voluptas aliquam dolores animi dignissimos hic, itaque fugit ratione quos nihil molestiae iste alias recusandae!',
	},
	{
		name: 'Luxury Spa',
		about: 'Doinz Lord of Lag',
		image: '/header-1.jpg',
		slug: 'slug',

		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias omnis delectus voluptatibus iusto obcaecati? Earum eaque quis ut quaerat eius amet ab, repellat aliquid, voluptas aliquam dolores animi dignissimos hic, itaque fugit ratione quos nihil molestiae iste alias recusandae!',
	},
];
const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = services.length;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Testimonial() {
	return (
		<section className='bg-background  pt-16 lg:pt-28 pb-8 lg:pb-14'>
			<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto '>
				<h2 className=' text-3xl lg:text-5xl font-bold text-center w-full pb-8 mb-8'>
					Testimonials
				</h2>
				<EmblaCarousel
					slides={SLIDES}
					options={OPTIONS}
					services={services}
				/>
			</div>
		</section>
	);
}
