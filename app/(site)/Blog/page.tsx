import React from 'react';
import { client, urlFor } from '@/sanity/config/sanity.utils';
import LatestBlog from './components/LatestBlog'
import AllBlog from "./components/AllBlog";


export default function Blog() {
	return (
		<>
			<div className='bg-background  py-16 lg:py-28 '>
				{/* <h2 className=' text-3xl lg:text-5xl font-bold text-center w-full pb-12'>
					Schedule Appointment
				</h2> */}
				<LatestBlog />
				<AllBlog/>
			</div>
		</>
	);
}
