import React from 'react';
import PricingCard from './PricingCard';

export default function Pricing() {
	return (
		<div className=' bg-[#2d2d2d] py-16 lg:py-28  text-center'>
			<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-[#2d2d2d] lg:max-w-7xl  md:mx-auto text-background '>
				<h2 className=' text-3xl lg:text-5xl font-bold w-full pb-12'>
					Our Special Packages
				</h2>
				<p>
					carefully go through our affordable pricing list to select
					services that are perfectly tailored to you.
				</p>
				<PricingCard />
			</div>
		</div>
	);
}
