import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function LatestBlog() {
	return (
		<section className='bg-background py-16 lg:py-28 '>
			<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto '>
				<h2 className=' text-3xl lg:text-5xl font-bold text-center w-full pb-6'>
					This section here will be for the blog posts
					<p className=' mt-8 text-xs'>
						I ❤️ U <br />
						so much <br />
						My Manbyen
					</p>
					<Button>
						<Link href='/Blog'>Read More</Link>
					</Button>
				</h2>
			</div>
		</section>
	);
}
