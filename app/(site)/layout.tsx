import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import '../globals.css';
import Navbar from '../components/Navbar';
import { Poppins } from 'next/font/google';
import Footer from '../components/Footer';
import { Toaster } from '@/components/ui/toaster';

// const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	// variable: '--font-poppins',
});

export const fetchCache = 'force-no-store';

export const metadata: Metadata = {
	title: 'MagicTouch Int',
	description: 'Wellness at its best.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<div className='bg-primary text-base'>
					<Navbar />
					{children}
<Toaster/>
					<Footer />
				</div>
			</body>
		</html>
	);
}
