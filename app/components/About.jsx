import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function About() {
	return (
		<div className='bg-primary py-16 lg:py-28 '>
			<div className=' px-4 sm:px-6 max-w-5xl py-2 lg:max-w-7xl  mx-auto '>
				<div className=' md:flex md:flex-row-reverse'>
					<div className='md:w-1/2 md:py-8'>
						<h3 className='text-3xl md:text-4xl font-bold pb-4'>
							About Our Spa
						</h3>
						<p>
							sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquipsed do
							eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip
						</p>
						<Button className='mt-4 hover:bg-primary rounded-full py-5 px-8 lg:py-6 lg:px-10'>
							<Link href='/#contact'>Contact Us</Link>
						</Button>
					</div>
					<div className='md:w-1/2'>
						<div>
							<Image
								src='/header-1.jpg'
								alt='about image'
								width={400}
								height={400}
							/>
						</div>{' '}
					</div>
				</div>
			</div>
		</div>
	);
}
