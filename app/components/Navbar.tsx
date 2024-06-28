'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileMenu } from './MobileMenu';

export const links = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/About' },
	{ name: 'Services', href: '/Services' },
	{ name: 'Blog', href: '/Blog' },
	{ name: 'Contact', href: '/Contact' },
];

export default function Navbar() {
	const pathname = usePathname();
	return (
		<header className=' bg-background'>
			<div className='h-12 bg-primary'></div>
			<div className='flex px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto items-center justify-between  '>
				<Link href='/'>
					<h1 className=' font-medium lg:text-5xl md:text-4xl text-3xl  '>
						Magic<span className=' font-extrabold '>Touch</span>
					</h1>
				</Link>
				<nav className='hidden gap-12 md:flex 2xl:ml-16'>
					{links.map((link, idx) => {
						return (
							<div key={idx}>
								{pathname === link.href ? (
									<Link
										href={link.href}
										className=' text-lg  font-semibold text-primary hover:text-foreground'>
										{link.name}
									</Link>
								) : (
									<Link
										href={link.href}
										className=' text-lg font-semibold text-foreground transition duration-100 hover:text-primary'>
										{link.name}
									</Link>
								)}
							</div>
						);
					})}
				</nav>
				<div className='flex md:hidden'>
					<MobileMenu />
				</div>
			</div>
		</header>
	);
}
