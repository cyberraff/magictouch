'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa6';

import { links } from './Navbar';
import Link from 'next/link';

export const socials = [
	{ icon: <Instagram size={28} />, href: '/' },
	{ icon: <Facebook size={28} />, href: '/About' },
	{ icon: <Twitter size={28} />, href: '/Services' },
	{ icon: <FaTiktok size={28} />, href: '/Contact' },
	{ icon: <FaWhatsapp size={28} />, href: '/Blog' },
];

export default function Footer() {
	const pathname = usePathname();
	const phoneNumber = '+1234567890';
	const emailAddress = 'example@example.com';

	return (
		<footer className=''>
			<div className=' py-16 lg:py-28 bg-[#2d2d2d]'>
				<div className='px-4 sm:px-6 max-w-5xl py-2 lg:max-w-7xl  mx-auto md:flex  text-background text-base'>
					<div className='flex-1'>
						{' '}
						<p className=' text-2xl font-bold'>
							<span className='inline-block w-3 h-3 bg-primary rounded-full mr-1'></span>
							About
						</p>
						<p className='md:w-[90%] my-4 pl-4'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Iusto voluptatibus dolorum natus minus, nemo
							magni incidunt ut sed debitis, dignissimos corporis
							suscipit eius nihil. Natus, sed accusantium, omnis
							ipsum hic ipsam adipisci excepturi error quibusdam
							rem, id nobis et debitis!
						</p>
					</div>
					<div className='flex-1'>
						{' '}
						<p className=' text-2xl font-bold'>
							<span className='inline-block w-3 h-3 bg-primary rounded-full mr-1'></span>
							Menu
						</p>
						<ul className='mt-4'>
							{links.map((link, idx) => {
								return (
									<div key={idx} className=' pl-4'>
										{pathname === link.href ? (
											<Link
												href={link.href}
												className=' text-lg  font-semibold text-primary hover:text-foreground'>
												{link.name}
											</Link>
										) : (
											<Link
												href={link.href}
												className=' text-lg font-semibold transition duration-100 hover:text-primary'>
												{link.name}
											</Link>
										)}
									</div>
								);
							})}
						</ul>
					</div>
					<div className='flex-1'>
						{' '}
						<p className=' text-2xl font-bold'>
							<span className='inline-block w-3 h-3 bg-primary rounded-full mr-1'></span>
							Contact
						</p>
						<div className='mt-4'>
							<Link href={`tel:${phoneNumber}`}>
								<p className='flex hover:text-primary'>
									<Phone size={20} className='mr-2 mt-1' />{' '}
									{phoneNumber}
								</p>
							</Link>
							<br />
							<Link
								href='https://wa.me/message/OZYFXEP5GXRHF1'
								target='_blank'>
								<p className='flex hover:text-primary'>
									<FaWhatsapp
										size={20}
										className='mr-2 mt-1'
									/>{' '}
									{phoneNumber}
								</p>
							</Link>
							<br />
							<Link href={`mailto:${emailAddress}`}>
								<p className='flex hover:text-primary'>
									<Mail size={20} className='mr-2 mt-1' />{' '}
									{emailAddress}
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className=' py-16 lg:py-28 bg-background '>
				<div className='px-4 sm:px-6 max-w-5xl py-2 lg:max-w-7xl  mx-auto text-[#2d2d2d] text-sm'>
					<p className=' text-xl font-bold text-primary mx-auto w-fit'>
						Follow Us
					</p>
					<div className='flex mx-auto w-fit my-4'>
						{/* button with link to containing social media icons  */}
						{socials.map((social, idx) => {
							return (
								<Link
									key={idx}
									href={social.href}
									className=' text-lg font-semibold transition duration-100 hover:text-primary mx-2'>
									{social.icon}
								</Link>
							);
						})}
					</div>
					<p className='w-fit mx-auto'>
						©️ 2024 All Rights Reserved. By HTML Design
					</p>
				</div>
			</div>
		</footer>
	);
}
