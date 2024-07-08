import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function About() {
	return (
		<>
			{' '}
			<section id='Services' className='bg-background py-16 lg:py-28 '>
				<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto '>
					<h2 className=' text-3xl lg:text-5xl font-bold text-center w-full pb-6'>
						About Us
					</h2>
					{/* SECTION ONE  */}
					<div className=' md:flex md:flex-row-reverse mt-16'>
						<div className='md:w-1/2 w-full'>
							<div className=' bg-[#2d2d2d] p-8 rounded-sm'>
								<Image
									src='/header-1.jpg'
									alt='about image'
									width={400}
									height={400}
									className='w-full -mt-16 rounded-sm '
								/>
							</div>{' '}
						</div>

						<div className=' h-16 py-6 md:hidden'> </div>

						<div className='md:w-1/2 md:pt-6 md:px-12'>
							<h3 className='text-xl md:text-2xl font-bold pb-2'>
								Welcome to MagicTouch
							</h3>
							<p className='pb-4 text-base'>
								Where tranquility and rejuvenation await you.
								Nestled in the heart of LagosCity our luxurious
								spa offers a sanctuary for relaxation and
								wellness, providing a respite from the hustle
								and bustle of everyday life. <br />
								At MagicTouch, we believe in the power of
								self-care and holistic healing, we are dedicated
								to providing personalized treatments that cater
								to your individual needs, ensuring a truly
								rejuvenating experience for body, mind, and
								soul.
							</p>
						</div>
					</div>{' '}
				</div>
			</section>
			{/* SECTION TWO  */}
			<section id='Services' className=' py-16 lg:py-28 bg-primary '>
				<div className=' px-4 sm:px-6 max-w-5xl py-2  lg:max-w-7xl  mx-auto '>
					<div className=' md:flex  mt-16'>
						<div className='md:w-1/2 w-full'>
							<div className=' bg-[#2d2d2d] p-8 rounded-sm'>
								<Image
									src='/header-1.jpg'
									alt='about image'
									width={400}
									height={400}
									className='w-full -mt-16 rounded-sm '
								/>
							</div>{' '}
						</div>

						<div className=' h-16 py-6 md:hidden'> </div>

						<div className='md:w-1/2 md:pt-6 md:px-12'>
							<h3 className='text-xl md:text-2xl font-bold pb-2'>
								Our Story
							</h3>
							<p className='pb-4 text-base'>
								Where tranquility and rejuvenation await you.
								Nestled in the heart of LagosCity our luxurious
								spa offers a sanctuary for relaxation and
								wellness, providing a respite from the hustle
								and bustle of everyday life. <br />
								At MagicTouch, we believe in the power of
								self-care and holistic healing, we are dedicated
								to providing personalized treatments that cater
								to your individual needs, ensuring a truly
								rejuvenating experience for body, mind, and
								soul.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
