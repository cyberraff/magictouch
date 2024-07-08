import Image from 'next/image';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Appointment from '../components/Appointment';
import Pricing from '../components/Pricing';
import LatestBlog from '../components/LatestBlog';
import About from '../components/About';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

// export const fetchCache = 'force-no-store';

export default function Home() {
	return (
		<>
			<Hero />
			<Appointment />
			<Services />
			<Pricing />
			<LatestBlog />
			<About />
			<Testimonial />
			{/* <Footer /> */}
		</>
	);
}
